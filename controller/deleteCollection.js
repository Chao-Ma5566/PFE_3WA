import BDD from "../model/BDD.js"
import Collection from "../model/Collection.js"

/**
 * @swagger
 * /collections/{id}:
 *   delete:
 *     summary: Delete a collection by ID
 *     tags: 
 *       - Collections
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the collection to delete
 *     responses:
 *       200:
 *         description: Collection deleted successfully
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
        const collection = new Collection(myBDD)
        const {id} = req.params
        const data = await collection.deleted({
            id: id
        })
        res.json({data})
    }catch(err) {
        console.log(err);
        res.sendStatus(500)
    }
}