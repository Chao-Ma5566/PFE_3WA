import BDD from "../model/BDD.js"
import Cart from "../model/Cart.js"
export default async (req, res) => {
    try {
        const myBDD = new BDD()
        const cart = new Cart(myBDD)
        const {user_id, product_id, quantity } = req.body
        const checkData = await cart.getByUserId({user_id: user_id})
        
        //check did user already have a cart, if not creat one then add product_id and quantity
        if(checkData.result.length === 0){
            const data = await cart.create({user_id: user_id})
            const cart_id = data.result.insertId
            const dataCart = await cart.createUserCart({
                cart_id: cart_id,
                product_id: product_id,
                quantity: quantity
            })
            res.json({dataCart})
        }else{
        //check if user already have same product in chat, use findIndex
        let foundProductIndex = checkData.result.findIndex(e=> e.product_id === product_id)
        console.log(foundProductIndex)
        //if index=-1, means there is no same product, so we creat a user_cart
        if(foundProductIndex === -1){
            const data = await cart.getIdByUserId({user_id: user_id})
            const cart_id = await data.result[0].id
            const dataCart = await cart.createUserCart({
                cart_id: cart_id,
                product_id: product_id,
                quantity: quantity
            })
            res.json({dataCart})
        }
        // if index > -1, means there already have same product, then need to get new quantity 
        else if(foundProductIndex > -1){
            const data = await cart.getIdByUserId({user_id: user_id})
            const cart_id = await data.result[0].id
            const newQuantity = checkData.result[foundProductIndex].quantity + quantity
            //if newQuantity > 0, we need to do a update
            if(newQuantity > 0){
                const dataCart = await cart.update({
                    newQuantity: newQuantity,
                    product_id: product_id,
                    cart_id: cart_id
                })
                res.json({dataCart})
            }
            //if newQuantity <= 0, we do a delete Product from user_cart
            else if(newQuantity <= 0){
                const dataCart = await cart.deletedProduct({
                    product_id: product_id,
                    user_id: user_id
                })
                res.json({dataCart})
            }
        }
        
    }}catch(err) {
        console.log(err);
        res.sendStatus(500)
    }
}
