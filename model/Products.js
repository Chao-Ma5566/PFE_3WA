//	id	name	description prix stock
class Products {
    constructor(bdd){
        this.pool = bdd.pool
        this.asyncQuery = bdd.asyncQuery 
    }
    
    async create({name, description, price, collection_id, stock, material}){
        const sql = "INSERT INTO products (name, description, price, collection_id, stock, material) VALUES (?,?,?,?,?,?)"
        const paramsSql = [name, description, price, collection_id, stock, material ]
        
        try{
            const result = await this.asyncQuery(sql,paramsSql)
            return {result}
        } catch(err){
            console.log(err)
            return err
        }
    }
    
    async getById({id}){
        const sql = `SELECT name, description, price, collection_id, stock, material, height, width, depth, seat_height, seat_depth, url, caption
        FROM products 
        JOIN pictures ON products.id = pictures.product_id
        JOIN dimensions ON products.id = dimensions.product_id
        WHERE products.id = ?`
        
        try{
            const result = await this.asyncQuery(sql,[id])
            return {result}
        } catch(err){
            console.log(err)
            return err
        }
    }
    
    
    async getAll(){
        const sql = `SELECT products.id AS id, name, price, stock, url, caption 
        FROM products JOIN pictures ON products.id = pictures.product_id`
        
        try{
            const result = await this.asyncQuery(sql)
            return {result}
        } catch(err){
            console.log(err)
            return err
        }
    }
    
    async update({name, description, price, collection_id, stock, material, id}){
        const sql = "UPDATE products SET name = ?, description = ?, price = ?, collection_id = ?, stock = ?, material=? WHERE id = ?"
        const paramsSql = [name, description, price, collection_id, stock, material, id]
        
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
        const sql = "DELETE FROM products WHERE id = ?"
        
        try{
            const result = await this.asyncQuery(sql,[id])
            return {result}
        } catch(err){
            console.log(err)
            return err
        }
    }
}

export default Products