import BDD from "../model/BDD.js"
import Cart from "../model/Cart.js"
import Products from "../model/Products.js"
import User from "../model/User.js"
import getCartArray from "../config/getCartArray.js"
import {verifyToken} from "../config/token.js"

/**
 * @swagger
 * /relogged:
 *   get:
 *     summary: Retrieve user data, cart items, and product list based on token
 *     tags: 
 *       - Users
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User data, cart items, and product list retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 result:
 *                   type: object
 *                   description: The user data
 *                   properties:
 *                     id:
 *                       type: integer
 *                       description: The user ID
 *                     last_name:
 *                       type: string
 *                       description: The user's last name
 *                     first_name:
 *                       type: string
 *                       description: The user's first name
 *                     birthday:
 *                       type: string
 *                       format: date
 *                       description: The user's birthday
 *                     email:
 *                       type: string
 *                       description: The user's email
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
        const productList = await products.getAll("")
        const cartItems = await getCartArray(productList.result, cartData.result)
        user.updateLogintimeById(userData.id)
        res.json({result:userData, cart: cartItems, products: productList.result})
    } catch(e){
        res.json({error:e})
    }
}
