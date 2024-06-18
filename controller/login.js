import BDD from "../model/BDD.js"
import Cart from "../model/Cart.js"
import Products from "../model/Products.js"
import User from "../model/User.js"
import {generateToken} from "../config/token.js"
import getCartArray from "../config/getCartArray.js"

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
        cart_id:userDataSQL.cart_id,
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

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Login a user and return user data, token, cart items, and product list
 *     tags: 
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: The email of the user
 *               password:
 *                 type: string
 *                 description: The password of the user
 *     responses:
 *       200:
 *         description: User logged in successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 response:
 *                   type: object
 *                   description: The user data and token
 *                   properties:
 *                     response:
 *                       type: object
 *                       description: The user data
 *                       properties:
 *                         id:
 *                           type: integer
 *                           description: The user ID
 *                         nom:
 *                           type: string
 *                           description: The user's last name
 *                         prenom:
 *                           type: string
 *                           description: The user's first name
 *                         email:
 *                           type: string
 *                           description: The user's email
 *                         cart_id:
 *                           type: integer
 *                           description: The user's cart ID
 *                         user:
 *                           type: boolean
 *                           description: Indicates if the user is a regular user
 *                         admin:
 *                           type: boolean
 *                           description: Indicates if the user is an admin
 *                     token:
 *                       type: string
 *                       description: The generated token
 *                 cart:
 *                   type: array
 *                   description: The items in the user's cart
 *                   items:
 *                     type: object
 *                     properties:
 *                       product_id:
 *                         type: integer
 *                         description: The product ID
 *                       quantity:
 *                         type: integer
 *                         description: The quantity of the product in the cart
 *                       name:
 *                         type: string
 *                         description: The name of the product
 *                       price:
 *                         type: number
 *                         description: The price of the product
 *                 products:
 *                   type: array
 *                   description: The list of products
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: The product ID
 *                       name:
 *                         type: string
 *                         description: The product name
 *                       description:
 *                         type: string
 *                         description: The product description
 *                       price:
 *                         type: number
 *                         description: The product price
 *                       collection_id:
 *                         type: integer
 *                         description: The ID of the collection to which the product belongs
 *                       stock:
 *                         type: integer
 *                         description: The stock quantity of the product
 *                       material:
 *                         type: string
 *                         description: The material of the product
 *       500:
 *         description: Internal server error
 */
export default async (req, res) => {

    try {
        
        const user = new User(BDD)
        const cart = new Cart(BDD)
        const products = new Products(BDD)
        const {email, password} = req.body
        const result = await user.login({email: email, password: password})
        if(!result.data){
            return res.status(500).json({response:result})
        }
        const response = await generateResponse(result.data[0])
        if(response){
            const cartData = await cart.getByUserId({user_id: response.response.id})
            const productList = await products.getAll("")
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

