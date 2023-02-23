class PictureArticles {
    
    constructor(bdd){
        this.pool = bdd.pool
        this.asyncQuery = bdd.asyncQuery 
    }
    
    async create({url,caption,article_id}){
        const sql = "INSERT INTO article_photos (url,caption,article_id) VALUES (?,?,?)"
        const paramsSql = [url,caption,article_id]
        
        try{
            const result = await this.asyncQuery(sql,paramsSql)
            return {result}
        } catch(err){
            console.log(err)
            return err
        }
    }
    
    async getById({id}){
        const sql = "SELECT * FROM article_photos WHERE id = ?"
        
        try{
            const result = await this.asyncQuery(sql,[id])
            return {result}
        } catch(err){
            console.log(err)
            return err
        }
    }
    
    async getByArticleId({article_id}){
        const sql = "SELECT * FROM article_photos WHERE article_photos.article_id = ?"
        
        try{
            const result = await this.asyncQuery(sql,[article_id])
            console.log(result)
            return {result}
        } catch(err){
            console.log(err)
            return err
        }
    }
    
    async update({url,caption,id}){
        const sql = "UPDATE article_photos SET url=?,caption=? WHERE article_id = ?"
        const paramsSql = [url,caption,id]
        
        try{
            const result = await this.asyncQuery(sql,paramsSql)
            return {result:result, response:"Modification effectuée"}
        } catch(err){
            console.log(err)
            return err
        }
    }
    
    async deletedByArticleId({article_id}){
        const sql = "DELETE FROM article_photos WHERE article_id = ?"
        
        try{
            const result = await this.asyncQuery(sql,[article_id])
            return {result}
        } catch(err){
            console.log(err)
            return err
        }
    }
}

export default PictureArticles