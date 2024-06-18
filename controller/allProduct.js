import BDD from "../model/BDD.js"
import Products from "../model/Products.js"

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Retrieve a list of all products
 *     tags: 
 *       - Products
 *     responses:
 *       200:
 *         description: A list of products
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
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
        const myBDD = new BDD()
        const products = new Products(myBDD)
        const filters = {
            name: req.query.name || null,
            collection: req.query.collection || null,
            minPrice: Array.isArray(req.query.price) ? req.query.price.find(p => p.startsWith('gt.')).split('gt.')[1] : (req.query.price && req.query.price.startsWith('gt.') ? req.query.price.split('gt.')[1] : null),
            maxPrice: Array.isArray(req.query.price) ? req.query.price.find(p => p.startsWith('lt.')).split('lt.')[1] : (req.query.price && req.query.price.startsWith('lt.') ? req.query.price.split('lt.')[1] : null),
        };

        const data = await products.getAll(filters)
        res.json({data})
    }catch(err) {
        console.log(err);
        res.sendStatus(500)
    }
}