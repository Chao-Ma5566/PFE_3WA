class Article {
    constructor(bdd){
        this.pool = bdd.pool
        this.asyncQuery = bdd.asyncQuery 
    }
    
    async create({title, content}){
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
        const sql = `SELECT articles.id AS id, title, content, url, caption, article_photos.id as pid
        FROM articles 
        JOIN article_photos ON articles.id = article_photos.article_id 
        WHERE articles.id = ?`
        
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
        title, article_id, url, caption, articles.id As id
        FROM articles JOIN article_photos photo ON articles.id = photo.article_id`
        
        try{
            const result = await this.asyncQuery(sql)
            return {result}
        } catch(err){
            console.log(err)
            return err
        }
    }
    
    async update({title, content, id}){
        const sql = "UPDATE articles SET title = ?, content = ? WHERE id = ?"
        
        try{
            const result = await this.asyncQuery(sql,[title, content, id])
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