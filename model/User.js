import bcrypt from "bcrypt"
import inputCheck from "../config/inputCheck.js"

class User {
    constructor(bdd){
        this.pool = bdd.pool
        this.asyncQuery = bdd.asyncQuery 
        this.saltRounds = 10
        this.passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*[@#$%^&+=!]).{8,}$/;
    }   
    
    async login({email, password}){
        
        if(!inputCheck([email, password])){
            return {response:'Aucun champ doit être vide ou dépasser 255 '}
        }
            
        try{
            let dataBDD = await this._emailExist(email) 
            
            if(!dataBDD[0]){
                return {response: "email ou mot de passe invalide"}
            }
            
            const passwordIsValide = await bcrypt.compare(password,dataBDD[0].password)
            
            if(passwordIsValide){
                await this.updateLogintimeById(dataBDD[0].id)
                return{response: passwordIsValide, data:dataBDD}
            }
            
            return {response: "email ou mot de passe invalide"}
        } catch (err){
            return {error: err}
        }
    }
    
    async _emailExist(email){
        try {
            const sql = `SELECT first_name, last_name, users.id AS id, email, password, role_id, cart.id AS cart_id 
            FROM users
            JOIN cart ON users.id = cart.user_id
            WHERE email = ?`
            const response  = await this.asyncQuery(sql,[email])
            if(response.length > 0) return response
            return false
        } catch(err){
            return err
        }
    }
    
    async register(data){
        const {first_name, last_name, email, password, birthday} = data
        const sql = `INSERT INTO users 
        (last_name, first_name, birthday, email, password, last_connection, registration_date, role_id)
        VALUES (?,?,?,?,?,NOW(),NOW(),?)`
        
        
        if (!this.passwordRegex.test(password)) {
            return { response: `Le mot de passe doit comporter au moins 8 caractères, 
            dont au moins une lettre majuscule, une lettre minuscule, un caractères special et un chiffre.` };
        }else if(!inputCheck(data)){
            return {response:'Aucun champ doit être vide ou dépasser 255.'}
        }
        
        try {
            // on verrifie si l'email existe en BDD
            const emailPresent = await this._emailExist(email)
        
            // error a la verrification de l'email
            if(emailPresent === undefined){
                return
            }
            
            // Email deja present en BDD 
            if(emailPresent.length > 0) {
                return {response:'email deja present'}
            }
            
            // On hash le password
            const mpdHash = await bcrypt.hash(password,this.saltRounds)
            
            // on creer la liste des params pour add user
            const paramsSql = [last_name, first_name, birthday, email, mpdHash, 2]
            
            // on fait la requete
            const createUser = await this.asyncQuery(sql,paramsSql)
            // on retourn la reponse
            return {response:createUser}
        }catch(err){
            console.log(err)
            return
        }
        
    }
    
    async updateProfil(data){
        const {first_name, last_name, birthday, id} = data
        const sql = `UPDATE users SET last_name = ?, first_name = ?, birthday = ? WHERE id = ?`
        
        if(!inputCheck(data)){
            return {response:'Aucun champ doit être vide ou dépasser 255.'}
        }
        
        try {
            
            // on creer la liste des params pour add user
            const paramsSql = [last_name, first_name,birthday, id]
            
            // on fait la requete
            const updateUser = await this.asyncQuery(sql,paramsSql)
            // on retourn la reponse
            return {response:updateUser}
        }catch(err){
            console.log(err)
            return
        }
        
    }
    
    async deleteAccount({id}){
        const sql = "DELETE FROM users WHERE id = ?"
        const paramsSql = [id]
        
        try {
            const result = await this.asyncQuery(sql, paramsSql)
            return result
        } catch(err){
            console.log(err)
            if(err) throw err
            
        }
    }
    
    async getAllUser(){
        const sql = "SELECT id, first_name, last_name, email, role_id FROM users"
        
        try {
            const result = await this.asyncQuery(sql)
            return result
        } catch(err){
            console.log(err)
            if(err) throw err
        }
    }
    
    async getByID({id}){
        const sql = `SELECT 
            id, first_name, last_name, email, registration_date, last_connection, role_id, birthday, password 
            FROM users WHERE id = ?`
        const paramsSql = [id]
        try {
            const result = await this.asyncQuery(sql, paramsSql)
            return result
        } catch(err){
            console.log(err)
            if(err) throw err
            
        }
    }
    async updateLogintimeById(id){
        const sql = "UPDATE users SET last_connection = NOW() WHERE id=?"
        
        try {
            const result = await this.asyncQuery(sql, [id])
            return result
        } catch(err){
            console.log(err)
            if(err) throw err
            
        }
    }
    
    async updateRoleById(data){
        const sql = "UPDATE users SET role_id = ? WHERE id=?"
        const {id, role_id} = data
        try {
            const result = await this.asyncQuery(sql, [role_id, id])
            return result
        } catch(err){
            console.log(err)
            if(err) throw err
            
        }
    }
    
    async updatePassewordById(data){
        
        const {oldPassword,newPassword, id} = data
        
        if (!this.passwordRegex.test(newPassword)) {
            return { response: `Le mot de passe doit comporter au moins 8 caractères, 
            dont au moins une lettre majuscule, une lettre minuscule, un caractères special et un chiffre.` };
        }else if(!inputCheck([oldPassword,newPassword])){
            return {response:'Aucun champ doit être vide ou dépasser 255.'}
        }
        const sql = "UPDATE users SET password = ? WHERE id=?"
        
        try {
            const dataBDD = await this.getByID({id})
            const passwordIsValide = await bcrypt.compare(oldPassword,dataBDD[0].password)
            
            
            if(passwordIsValide){
                const mpdHash = await bcrypt.hash(newPassword,this.saltRounds)
            
            // on creer la liste des params pour add user
                const paramsSql = [mpdHash,id]
                
                // on fait la requete
                // eslint-disable-next-line no-unused-vars
                const result = await this.asyncQuery(sql,paramsSql)
                // on retourn la reponse
                return {response:"Modification de mots de passe validé"}
            }
            return {response:"L'ancien mots de passe invalide"}
        } catch(err){
            console.log(err)
            if(err) throw err
            
        }
    }
}

export default User