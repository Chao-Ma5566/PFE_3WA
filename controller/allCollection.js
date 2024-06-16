import BDD from "../model/BDD.js"
import Collection from "../model/Collection.js"

/**
 * @swagger
 * /collections:
 *   get:
 *     summary: Retrieve a list of all collections
 *     tags: 
 *       - Collections
 *     responses:
 *       200:
 *         description: A list of collections
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
 *                         description: The collection ID
 *                       title:
 *                         type: string
 *                         description: The collection title
 *                       description:
 *                         type: string
 *                         description: The collection description
 *       500:
 *         description: Internal server error
 */
export default async (req, res) => {
    try {
        const myBDD = new BDD()
        const collection = new Collection(myBDD)
        const data = await collection.getAll()
        res.json({data})
    }catch(err) {
        console.log(err);
        res.sendStatus(500)
    }
}