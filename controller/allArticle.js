import Article from "../model/Article.js"
import BDD from "../model/BDD.js"

/**
 * @swagger
 * /articles:
 *   get:
 *     summary: Retrieve a list of all articles
 *     tags: 
 *       - Articles
 *     responses:
 *       200:
 *         description: A list of articles
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
 *                         description: The article ID
 *                       title:
 *                         type: string
 *                         description: The article title
 *                       content:
 *                         type: string
 *                         description: The article content
 *       500:
 *         description: Internal server error
 */
export default async (req, res) => {
    try {
        
        const article = new Article(BDD)
        const data = await article.getAll()
        res.json({data})
    }catch(err) {
        console.log(err);
        res.sendStatus(500)
    }
}