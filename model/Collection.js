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
    
    async getByName({name}){
        const sql = "SELECT * FROM collection WHERE name = ?"
        
        if(!inputCheck(name)){
            return {response:'Champ name ne doit être vide ou dépasser 255 '}
        }   
        try{
            const result = await this.asyncQuery(sql,[name])
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
    
    async update({name, description}){
        const sql = "UPDATE collection SET name = ?, description = ? WHERE id = ?"
        const paramsSql = [name, description]
        
        try{
            const result = await this.asyncQuery(sql,paramsSql)
            return {result}
        } catch(err){
            console.log(err)
            return err
        }
    }
    
    async rupture({id}){
        const sql = "UPDATE products SET stock = 0 WHERE id = ?"
        
        try{
            const result = await this.asyncQuery(sql,[id])
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