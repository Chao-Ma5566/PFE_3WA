import Article from "../model/Article.js"
import BDD from "../model/BDD.js"
import deleteFile from "../config/deleteFile.js"

/**
 * @swagger
 * /articles/{id}:
 *   delete:
 *     summary: Delete an article by ID
 *     tags: 
 *       - Articles
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the article to delete
 *     responses:
 *       200:
 *         description: Article deleted successfully
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
export default async (req, res) => {
    try {
        const myBDD = new BDD()
        const article = new Article(myBDD)
        const {id} = req.params
        const articleInfo = await article.getById({id})
        const data = await article.deleted({id})
        if(data.result.affectedRows > 0){
            const fileName = articleInfo.result[0].url
            await deleteFile(fileName)
        }
        res.json({data})
    }catch(err) {
        console.log(err);
        res.sendStatus(500)
    }
}
