class Dimensions {
    constructor(bdd){
        this.pool = bdd.pool
        this.asyncQuery = bdd.asyncQuery 
    }
    
    async create({product_id, height, width, depth, seat_height, seat_depth}){
        const sql = "INSERT INTO dimensions (product_id, height, width, depth, seat_height, seat_depth) VALUES (?,?,?,?,?,?)"
        const paramsSql = [product_id, height, width, depth, seat_height, seat_depth]
        
        try{
            const result = await this.asyncQuery(sql,paramsSql)
            return {result}
        } catch(err){
            console.log(err)
            return err
        }
    }
    
    async getById({product_id}){
        const sql = "SELECT product_id, height, width, depth, seat_height, seat_depth FROM dimensions WHERE product_id = ?"
        
        try{
            const result = await this.asyncQuery(sql,[product_id])
            return {result}
        } catch(err){
            console.log(err)
            return err
        }
    }
    
    async update({product_id, height, width, depth, seat_height, seat_depth}){
        const sql = "UPDATE dimensions SET height = ?, width = ?, depth = ?, seat_height= ?, seat_depth = ? WHERE product_id = ?"
        const paramsSql = [ height, width, depth, seat_height, seat_depth, product_id]
        
        try{
            const result = await this.asyncQuery(sql,paramsSql)
            return {result}
        } catch(err){
            console.log(err)
            return err
        }
    }
    
     async deleted({product_id}){
        const sql = "DELETE dimensions WHERE product_id = ?"
        
        try{
            const result = await this.asyncQuery(sql,[product_id])
            return {result}
        } catch(err){
            console.log(err)
            return err
        }
    }
}

export default Dimensions