import BDD from "../model/BDD.js"
import Cart from "../model/Cart.js"

/**
 * @swagger
 * /cart:
 *   patch:
 *     summary: Delete a product from the cart
 *     tags: 
 *       - Cart
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               product_id:
 *                 type: integer
 *                 description: The ID of the product to delete
 *               cart_id:
 *                 type: integer
 *                 description: The ID of the cart
 *     responses:
 *       200:
 *         description: Product deleted from the cart successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 dataCart:
 *                   type: object
 *                   description: The result of the delete operation
 *       500:
 *         description: Internal server error
 */
export default async (req, res) => {
    try {
        
        const cart = new Cart(BDD)
        const {product_id, cart_id } = req.body
        const dataCart = await cart.deletedProduct({
                cart_id: cart_id,
                product_id: product_id,
            })
            res.json({dataCart})
        

        }catch(err) {
            console.log(err);
            res.sendStatus(500)
        }
}
