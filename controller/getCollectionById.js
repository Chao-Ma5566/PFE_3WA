import BDD from "../model/BDD.js"
import Collection from "../model/Collection.js"

/**
 * @swagger
 * /collections/{id}:
 *   get:
 *     summary: Retrieve a collection by ID
 *     tags: 
 *       - Collections
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the collection to retrieve
 *     responses:
 *       200:
 *         description: A collection
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   description: The collection data
 *                   properties:
 *                     id:
 *                       type: integer
 *                       description: The collection ID
 *                     title:
 *                       type: string
 *                       description: The collection title
 *                     description:
 *                       type: string
 *                       description: The collection description
 *       500:
 *         description: Internal server error
 */
export default async (req, res) => {
    try {
        
        const collection = new Collection(BDD)
        const {id} = req.params
        const data = await collection.getById({
            id: id,
        })
        res.json({data})
    }catch(err) {
        console.log(err);
        res.sendStatus(500)
    }
}