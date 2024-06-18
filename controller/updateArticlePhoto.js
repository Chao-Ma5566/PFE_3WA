import Article from "../model/Article.js"
import BDD from "../model/BDD.js"
import PictureArticles from "../model/PictureArticles.js"
import deleteFile from "../config/deleteFile.js"

/**
 * @swagger
 * /articles/photo:
 *   patch:
 *     summary: Update the photo of an article by ID
 *     tags: 
 *       - Articles
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 description: The ID of the article to update
 *               files:
 *                 type: string
 *                 description: The new URL of the article's photo
 *               caption:
 *                 type: string
 *                 description: The new caption for the article's photo
 *     responses:
 *       200:
 *         description: Article photo updated successfully
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
        
        const article = new Article(BDD)
        const pictureArticles = new PictureArticles(BDD)
        const {files, caption, id} = req.body
        const articleInfo = await article.getById({id})
        const data = await pictureArticles.update({
            url:files,
            caption: caption,
            id: id
        })
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