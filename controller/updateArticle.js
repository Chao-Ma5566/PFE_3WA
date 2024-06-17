import Article from "../model/Article.js"
import BDD from "../model/BDD.js"

/**
 * @swagger
 * /articles:
 *   patch:
 *     summary: Update an article by ID
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
 *               title:
 *                 type: string
 *                 description: The new title of the article
 *               content:
 *                 type: string
 *                 description: The new content of the article
 *     responses:
 *       200:
 *         description: Article updated successfully
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
        const myBDD = new BDD()
        const article = new Article(myBDD)
        const {title, content, id} = req.body
        const data = await article.update({
            title: title,
            content: content,
            id: id
        })
        res.json({data})
    }catch(err) {
        console.log(err);
        res.sendStatus(500)
    }
}