import Article from "../model/Article.js"
import BDD from "../model/BDD.js"

/**
 * @swagger
 * /articles/{id}:
 *   get:
 *     summary: Retrieve an article by ID
 *     tags: 
 *       - Articles
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the article to retrieve
 *     responses:
 *       200:
 *         description: An article
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   description: The article data
 *                   properties:
 *                     id:
 *                       type: integer
 *                       description: The article ID
 *                     title:
 *                       type: string
 *                       description: The article title
 *                     content:
 *                       type: string
 *                       description: The article content
 *       500:
 *         description: Internal server error
 */
export default async (req, res) => {
    try {
        
        const article = new Article(BDD)
        const {id} = req.params
        const data = await article.getById({id})
        res.json({data})
    }catch(err) {
        console.log(err);
        res.sendStatus(500)
    }
}