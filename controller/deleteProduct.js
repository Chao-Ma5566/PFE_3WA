import BDD from "../model/BDD.js"
import Products from "../model/Products.js"
import deleteFile from "../config/deleteFile.js"

/**
 * @swagger
 * /products/{id}:
 *   delete:
 *     summary: Delete a product by ID
 *     tags: 
 *       - Products
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the product to delete
 *     responses:
 *       200:
 *         description: Product deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   description: The result of the delete operation
 *       500:
 *         description: Internal server error
 */
export default async(req, res) => {
    try {
        const myBDD = new BDD()
        const products = new Products(myBDD)
        const { id } = req.params
        const productInfo = await products.getById({id:id})
        const data = await products.deleted({
            id: id
        })
        if(data.result.affectedRows > 0){
            const fileName = productInfo.result[0].url
            await deleteFile(fileName)
        }
        
        res.json({ data })
    }
    catch (err) {
        console.log(err);
        res.sendStatus(500)
    }
}
