import BDD from "../model/BDD.js"
import Products from "../model/Products.js"

/**
 * @swagger
 * /products/{id}:
 *   get:
 *     summary: Retrieve a product by ID
 *     tags: 
 *       - Products
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the product to retrieve
 *     responses:
 *       200:
 *         description: A product
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   description: The product data
 *                   properties:
 *                     id:
 *                       type: integer
 *                       description: The product ID
 *                     name:
 *                       type: string
 *                       description: The product name
 *                     description:
 *                       type: string
 *                       description: The product description
 *                     price:
 *                       type: number
 *                       description: The product price
 *                     collection_id:
 *                       type: integer
 *                       description: The ID of the collection to which the product belongs
 *                     stock:
 *                       type: integer
 *                       description: The stock quantity of the product
 *                     material:
 *                       type: string
 *                       description: The material of the product
 *       500:
 *         description: Internal server error
 */
export default async(req, res) => {
    try {
        
        const products = new Products(BDD)
        const { id } = req.params
        const data = await products.getById({
            id: id
        })
        res.json({ data })
    }
    catch (err) {
        console.log(err);
        res.sendStatus(500)
    }
}
