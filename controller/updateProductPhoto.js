import BDD from "../model/BDD.js"
import PictureProducts from "../model/PictureProducts.js"
import Products from "../model/Products.js"
import deleteFile from "../config/deleteFile.js"

/**
 * @swagger
 * /products/photo:
 *   patch:
 *     summary: Update the photo of a product by ID
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
 *               files:
 *                 type: string
 *                 description: The new URL of the product's photo
 *               caption:
 *                 type: string
 *                 description: The new caption for the product's photo
 *     responses:
 *       200:
 *         description: Product photo updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   description: The result of the update operation
 *       500:
 *         description: Internal server error
 */
export default async (req, res) => {
    try {
        
        const products = new Products(BDD)
        const pictureProducts = new PictureProducts(BDD)
        const {files, caption, id} = req.body
        const productInfo = await products.getById({id})
        const data = await pictureProducts.update({
            url:files,
            caption: caption,
            id: id
        })
        if(data.result.affectedRows > 0){
            const fileName = productInfo.result[0].url
            await deleteFile(fileName)
        }
        res.json({data})
    }catch(err) {
        console.log(err);
        res.sendStatus(500)
    }
}