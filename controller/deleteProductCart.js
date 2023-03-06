import BDD from "../model/BDD.js"
import Cart from "../model/Cart.js"
export default async (req, res) => {
    try {
        const myBDD = new BDD()
        const cart = new Cart(myBDD)
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
