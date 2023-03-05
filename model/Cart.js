import inputCheck from "../config/inputCheck.js"

class Cart {
    constructor(bdd){
        this.pool = bdd.pool
        this.asyncQuery = bdd.asyncQuery 
    }
    
    async create({user_id}){
        const sql = "INSERT INTO cart (user_id) VALUES (?)"
        const paramsSql = [user_id]
        
        try{
            const result = await this.asyncQuery(sql,paramsSql)
            return {result}
        } catch(err){
            console.log(err)
            return err
        }
    }
    
    async createUserCart({cart_id, product_id, quantity}){
        const sql = "INSERT INTO user_cart (cart_id, product_id, quantity) VALUES (?,?,?)"
        const paramsSql = [cart_id, product_id, quantity]
        
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
    
    async getIdByUserId({user_id}){
        const sql = "SELECT id FROM cart WHERE user_id = ?"
        
        try{
            const result = await this.asyncQuery(sql,[user_id])
            return {result}
        } catch(err){
            console.log(err)
            return err
        }
    }
    
    async getByUserId({user_id}){
        const sql = `SELECT product_id, quantity 
        FROM cart 
        JOIN user_cart uc ON cart.id = uc.cart_id
        WHERE user_id = ?`
        
        try{
            const result = await this.asyncQuery(sql,[user_id])
            return {result}
        } catch(err){
            console.log(err)
            return err
        }
    }
    
    async update({newQuantity, product_id, cart_id}){
        const sql = "UPDATE user_cart SET quantity = ? WHERE product_id = ? AND cart_id = ?"
        const paramsSql = [newQuantity, product_id, cart_id]
        
        try{
            const result = await this.asyncQuery(sql,paramsSql)
            return {result}
        } catch(err){
            console.log(err)
            return err
        }
    }
    
    async deletedByUserId({user_id}){
        const sql = "DELETE FROM cart WHERE user_id = ?"
        
        try{
            const result = await this.asyncQuery(sql,[user_id])
            return {result}
        } catch(err){
            console.log(err)
            return err
        }
    }
    
    async deletedProduct({user_id, product_id}){
        const sql = "DELETE FROM user_cart WHERE product_id = ? AND user_id = ?"
        
        try{
            const result = await this.asyncQuery(sql,[product_id, user_id])
            return {result}
        } catch(err){
            console.log(err)
            return err
        }
    }
}

export default Cart