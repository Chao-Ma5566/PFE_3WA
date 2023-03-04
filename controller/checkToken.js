import {verifyToken} from "../config/token.js"
import BDD from "../model/BDD.js"
import User from "../model/User.js"
import Cart from "../model/Cart.js"

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
        const userData = await verifyToken(token)
        const cartData = await cart.getByUserId({user_id: userData.id})
        user.updateLogintimeById(userData.id)
        console.log(cartData)
        res.json({result:userData, cart: cartData})
    } catch(e){
        res.json({error:e})
    }
}