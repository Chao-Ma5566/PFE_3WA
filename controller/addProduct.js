import BDD from "../model/BDD.js"
import Dimensions from "../model/Dimensions.js"
import PictureProducts from "../model/PictureProducts.js"
import Products from "../model/Products.js"

/**
 * @swagger
 * /products:
 *   post:
 *     summary: Create a new product
 *     tags: 
 *       - Products
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the product
 *               description:
 *                 type: string
 *                 description: The description of the product
 *               price:
 *                 type: number
 *                 description: The price of the product
 *               collection_id:
 *                 type: integer
 *                 description: The ID of the collection to which the product belongs
 *               stock:
 *                 type: integer
 *                 description: The stock quantity of the product
 *               material:
 *                 type: string
 *                 description: The material of the product
 *               files:
 *                 type: string
 *                 description: The URL of the product image
 *               height:
 *                 type: number
 *                 description: The height of the product
 *               width:
 *                 type: number
 *                 description: The width of the product
 *               depth:
 *                 type: number
 *                 description: The depth of the product
 *               seat_height:
 *                 type: number
 *                 description: The seat height of the product
 *               seat_depth:
 *                 type: number
 *                 description: The seat depth of the product
 *     responses:
 *       200:
 *         description: Product created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   description: The data of the created product
 *                 dataPicture:
 *                   type: object
 *                   description: The data of the created product picture
 *                 dataDimensions:
 *                   type: object
 *                   description: The data of the created product dimensions
 *       500:
 *         description: Internal server error
 */
export default async(req, res) => {
    try {
        
        const products = new Products(BDD)
        const pictureProducts = new PictureProducts(BDD)
        const dimensions = new Dimensions(BDD)
        const { name, description, price, collection_id, stock, material, files, height, width, depth, seat_height, seat_depth } = req.body
        const data = await products.create({
            name: name,
            description: description,
            price: price,
            collection_id: collection_id,
            stock: stock,
            material: material
        })
        const product_id = data.result.insertId
        const dataPicture = await pictureProducts.create({ url: files, caption: name, product_id: product_id })
        const dataDimensions = await dimensions.create({
            product_id: product_id, 
            height: height, 
            width: width, 
            depth: depth, 
            seat_height: seat_height, 
            seat_depth: seat_depth
        })
        res.json({ data, dataPicture, dataDimensions })
    }
    catch (err) {
        console.log(err);
        res.sendStatus(500)
    }
}
