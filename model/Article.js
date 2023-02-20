class Article {
    constructor(bdd){
        this.pool = bdd.pool
        this.asyncQuery = bdd.asyncQuery 
    }
    
    async create({title, content, content2}){
        const sql = "INSERT INTO articles (title, content) VALUES (?,?)"
        const paramsSql = [title, content]
        
        try{
            const result = await this.asyncQuery(sql,paramsSql)
            return {result}
        } catch(err){
            console.log(err)
            return err
        }
    }
    
    async getById({id}){
        const sql = "SELECT * FROM articles WHERE id = ?"
        
        try{
            const result = await this.asyncQuery(sql,[id])
            return {result}
        } catch(err){
            console.log(err)
            return err
        }
    }
    
    async getAll(){
        const sql = `SELECT
        title, article_id, url, caption 
        FROM articles JOIN article_photos photo ON articles.id = photo.article_id`
        
        try{
            const result = await this.asyncQuery(sql)
            console.log(result)
            return {result}
        } catch(err){
            console.log(err)
            return err
        }
    }
    
    async update({title, contente, id}){
        const sql = "UPDATE articles SET title = ?, contente = ? WHERE id = ?"
        
        try{
            const result = await this.asyncQuery(sql,[title, contente, id])
            return {result}
        } catch(err){
            console.log(err)
            return err
        }
    }
    
    async deleted({id}){
        const sql = "DELETE FROM articles WHERE id = ?"
        
        try{
            const result = await this.asyncQuery(sql,[id])
            return {result}
        } catch(err){
            console.log(err)
            return err
        }
    }
}

export default Article