import BDD from "../model/BDD.js"
import Collection from "../model/Collection.js"

/**
 * @swagger
 * /collections:
 *   patch:
 *     summary: Update a collection by ID
 *     tags: 
 *       - Collections
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 description: The ID of the collection to update
 *               title:
 *                 type: string
 *                 description: The new title of the collection
 *               description:
 *                 type: string
 *                 description: The new description of the collection
 *     responses:
 *       200:
 *         description: Collection updated successfully
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
        const collection = new Collection(myBDD)
        const {title, description, id} = req.body
        const data = await collection.update({
            id: id,
            title: title,
            description: description,
        })
        res.json({data})
    }catch(err) {
        console.log(err);
        res.sendStatus(500)
    }
}