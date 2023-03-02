//	id,url,captions,products_id
class PictureProducts {
    constructor(bdd){
        this.pool = bdd.pool
        this.asyncQuery = bdd.asyncQuery 
    }
    
    async create({url,caption,product_id}){
        const sql = "INSERT INTO pictures (url,caption,product_id) VALUES (?,?,?)"
        const paramsSql = [url,caption,product_id]
        
        try{
            const result = await this.asyncQuery(sql,paramsSql)
            return {result}
        } catch(err){
            console.log(err)
            return err
        }
    }
    
    async getById({id}){
        const sql = "SELECT * FROM pictures WHERE id = ?"
        
        try{
            const result = await this.asyncQuery(sql,[id])
            return {result}
        } catch(err){
            console.log(err)
            return err
        }
    }
    
    async getByProductId({products_id}){
        const sql = "SELECT * FROM pictures_products WHERE products_id = ?"
        
        try{
            const result = await this.asyncQuery(sql,[products_id])
            return {result}
        } catch(err){
            console.log(err)
            return err
        }
    }
    
    async update({url,caption,id}){
        const sql = "UPDATE pictures SET url=?,caption=? WHERE product_id = ?"
        const paramsSql = [url,caption,id]
        
        try{
            const result = await this.asyncQuery(sql,paramsSql)
            return {result}
        } catch(err){
            console.log(err)
            return err
        }
    }
    
    async deletedById({id}){
        const sql = "DELETE pictures_products WHERE id = ?"
        
        try{
            const result = await this.asyncQuery(sql,[id])
            return {result}
        } catch(err){
            console.log(err)
            return err
        }
    }
    
    async deletedByProductId({products_id}){
        const sql = "DELETE pictures_products WHERE products_id = ?"
        
        try{
            const result = await this.asyncQuery(sql,[products_id])
            return {result}
        } catch(err){
            console.log(err)
            return err
        }
    }
}

export default PictureProducts