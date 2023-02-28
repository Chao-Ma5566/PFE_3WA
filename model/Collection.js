import inputCheck from "../config/inputCheck.js"

//	id	name	description 
class Collection {
    constructor(bdd){
        this.pool = bdd.pool
        this.asyncQuery = bdd.asyncQuery 
    }
    
    async create({title, description}){
        const sql = "INSERT INTO collection (title, description) VALUES (?,?)"
        const paramsSql = [title, description]
        
        if(!inputCheck(title)){
            return {response:'Champ title ne doit être vide ou dépasser 250 '}
        }else if(!inputCheck(description,510)){
            return {response:'Champ description doit pas être vide ou dépasser 510 '}
        }
        
        try{
            const result = await this.asyncQuery(sql,paramsSql)
            return {result}
        } catch(err){
            console.log(err)
            return err
        }
    }
    
    async getById({id}){
        const sql = "SELECT id, title, description FROM collection WHERE id = ?"
        
        try{
            const result = await this.asyncQuery(sql,[id])
            return {result}
        } catch(err){
            console.log(err)
            return err
        }
    }
    
    
    async getAll(){
        const sql = "SELECT * FROM collection"
        
        try{
            const result = await this.asyncQuery(sql)
            return {result}
        } catch(err){
            console.log(err)
            return err
        }
    }
    
    async update({id, title, description}){
        const sql = "UPDATE collection SET title = ?, description = ? WHERE id = ?"
        const paramsSql = [title, description, id]
        
        if(!inputCheck(title)){
            return {response:'Champ title ne doit être vide ou dépasser 250 '}
        }else if(!inputCheck(description,510)){
            return {response:'Champ description doit pas être vide ou dépasser 510 '}
        }
        
        try{
            const result = await this.asyncQuery(sql,paramsSql)
            return {result}
        } catch(err){
            console.log(err)
            return err
        }
    }
    
    async deleted({id}){
        const sql = "DELETE collection WHERE id = ?"
        
        try{
            const result = await this.asyncQuery(sql,[id])
            return {result}
        } catch(err){
            console.log(err)
            return err
        }
    }
}

export default Collection