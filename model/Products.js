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
    
    
    async getAll(filters) {
        let sql = `SELECT products.id AS id, name, price, stock, url, caption, collection_id 
                   FROM products 
                   JOIN pictures ON products.id = pictures.product_id 
                   WHERE 1=1`;
        
        const params = [];
        if (filters.name) {
            sql += ` AND name LIKE ?`;
            params.push(`%${filters.name}%`);
        }
    
        if (filters.collection) {
            const collection_id = filters.collection.split('eq.')[1];
            sql += ` AND collection_id = ?`;
            params.push(collection_id);
        }
    
        if (filters.minPrice) {
            sql += ` AND price >= ?`;
            params.push(filters.minPrice);
        }
    
        if (filters.maxPrice) {
            sql += ` AND price <= ?`;
            params.push(filters.maxPrice);
        }
    
        try {
            const result = await this.asyncQuery(sql, params);
            return {result};
        } catch(err) {
            console.log(err);
            return err;
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