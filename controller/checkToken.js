import {verifyToken} from "../config/token.js"
import getCartArray from "../config/getCartArray.js"
import BDD from "../model/BDD.js"
import User from "../model/User.js"
import Cart from "../model/Cart.js"
import Products from "../model/Products.js"

export default async (req, res) => { 
    // on recupere les info d'autentification de la requette 
    const headersAuth = req.headers['authorization'] 
    // on extrait le token 
    const token = headersAuth ? headersAuth.split(' ')[1] : null
    // on decrypt le token 
    
    try { 
        const myBDD = new BDD()
        const user = new User(myBDD)
        const cart = new Cart(myBDD)
        const products = new Products(myBDD)
        const userData = await verifyToken(token)
        if(!userData){
            return res.status(500).json({response:userData})
        }
        const cartData = await cart.getByUserId({user_id: userData.id})
        const productList = await products.getAll()
        const cartItems = await getCartArray(productList.result, cartData.result)
        user.updateLogintimeById(userData.id)
        res.json({result:userData, cart: cartItems, products: productList.result})
    } catch(e){
        res.json({error:e})
    }
}
