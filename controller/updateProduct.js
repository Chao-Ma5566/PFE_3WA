import BDD from "../model/BDD.js"
import Dimensions from "../model/Dimensions.js"
import Products from "../model/Products.js"

/**
 * @swagger
 * /products:
 *   patch:
 *     summary: Update a product and its dimensions by ID
 *     tags: 
 *       - Products
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 description: The ID of the product to update
 *               name:
 *                 type: string
 *                 description: The new name of the product
 *               description:
 *                 type: string
 *                 description: The new description of the product
 *               price:
 *                 type: number
 *                 description: The new price of the product
 *               collection_id:
 *                 type: integer
 *                 description: The new collection ID of the product
 *               stock:
 *                 type: integer
 *                 description: The new stock quantity of the product
 *               material:
 *                 type: string
 *                 description: The new material of the product
 *               height:
 *                 type: number
 *                 description: The new height of the product
 *               width:
 *                 type: number
 *                 description: The new width of the product
 *               depth:
 *                 type: number
 *                 description: The new depth of the product
 *               seat_height:
 *                 type: number
 *                 description: The new seat height of the product
 *               seat_depth:
 *                 type: number
 *                 description: The new seat depth of the product
 *     responses:
 *       200:
 *         description: Product updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   description: The result of the product update operation
 *                 dataDimensions:
 *                   type: object
 *                   description: The result of the dimensions update operation
 *       500:
 *         description: Internal server error
 */
export default async(req, res) => {
    try {
        
        const products = new Products(BDD)
        const dimensions = new Dimensions(BDD)
        const { name, description, price, collection_id, stock, material, height, width, depth, seat_height, seat_depth, id } = req.body
        const data = await products.update({
            name: name,
            description: description,
            price: price,
            collection_id: collection_id,
            stock: stock,
            material: material,
            id: id
        })
        const dataDimensions = await dimensions.update({
            product_id: id, 
            height: height, 
            width: width, 
            depth: depth, 
            seat_height: seat_height, 
            seat_depth: seat_depth
        })
        res.json({ data, dataDimensions })
    }
    catch (err) {
        console.log(err);
        res.sendStatus(500)
    }
}
