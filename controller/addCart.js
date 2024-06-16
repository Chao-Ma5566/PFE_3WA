import BDD from "../model/BDD.js"
import Cart from "../model/Cart.js"

/**
 * @swagger
 * /cart:
 *   post:
 *     summary: Add a product to the cart
 *     tags: 
 *       - Cart
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user_id:
 *                 type: integer
 *               product_id:
 *                 type: integer
 *               quantity:
 *                 type: integer
 *               cart_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Product added to the cart successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 dataCart:
 *                   type: object
 *       500:
 *         description: Internal server error
 */
export default async (req, res) => {
    try {
        const myBDD = new BDD()
        const cart = new Cart(myBDD)
        const {user_id, product_id, quantity, cart_id } = req.body
        const checkData = await cart.getByUserId({user_id: user_id})
        console.log(checkData)
        //check if user already have same product in chat, use findIndex
        let foundProductIndex = checkData.result.findIndex(e=> e.product_id === product_id)
        //if index=-1, means there is no same product, so we creat a user_cart
        if(foundProductIndex === -1){
            const dataCart = await cart.createUserCart({
                cart_id: cart_id,
                product_id: product_id,
                quantity: quantity
            })
            res.json({dataCart})
        }
        // if index > -1, means there already have same product, then need to get new quantity 
        else if(foundProductIndex > -1){
            const newQuantity = checkData.result[foundProductIndex].quantity + quantity
            //if newQuantity > 0, we need to do a update
            const dataCart = await cart.update({
                newQuantity: newQuantity,
                product_id: product_id,
                cart_id: cart_id
            })
            res.json({dataCart})
            
        }
            
        }catch(err) {
            console.log(err);
            res.sendStatus(500)
        }
}
