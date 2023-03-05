import BDD from "../model/BDD.js"
import User from "../model/User.js"
import {generateToken} from "../config/token.js"
import getCartArray from "../config/getCartArray.js"
import Cart from "../model/Cart.js"
import Products from "../model/Products.js"




const generateResponse = async (userDataSQL) => {
    // ID du role Admin en BDD
    const ADMIN_ROLE_ID = 1
    // verrifie si le user est admin return true OR false
    const admin = userDataSQL.role_id === ADMIN_ROLE_ID
    
    const userData = { 
        id:userDataSQL.id,
        nom:userDataSQL.last_name,
        prenom:userDataSQL.first_name,
        email:userDataSQL.email,
        
        user:true,
        admin
    }
    try {
        const token = await generateToken(userData)
        return {response:userData, token}
    } catch(err){
        console.log(err)
        return
    }
}

export default async (req, res) => {

    try {
        const myBDD = new BDD()
        const user = new User(myBDD)
        const cart = new Cart(myBDD)
        const products = new Products(myBDD)
        const {email, password} = req.body
        const result = await user.login({email: email, password: password})
        if(!result.data){
            return res.status(500).json({response:result})
        }
        const response = await generateResponse(result.data[0])
        if(response){
            console.log(response.response.id)
            const cartData = await cart.getByUserId({user_id: response.response.id})
            const productList = await products.getAll()
            const cartItems = await getCartArray(productList.result, cartData.result)
            res.json({response, cart: cartItems, products: productList.result}) 
        }else{
           res.json({response:null}) 
        }
        
    } catch(err){
        console.log(err)
        res.sendStatus(500)
    }
}

