import BDD from "../model/BDD.js"
import Collection from "../model/Collection.js"

/**
 * @swagger
 * /collections:
 *   post:
 *     summary: Create a new collection
 *     tags: 
 *       - Collections
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of the collection
 *               description:
 *                 type: string
 *                 description: The description of the collection
 *     responses:
 *       200:
 *         description: Collection created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   description: The data of the created collection
 *       500:
 *         description: Internal server error
 */
export default async (req, res) => {
    try {
        
        const collection = new Collection(BDD)
        const {title, description} = req.body
        const data = await collection.create({
            title: title,
            description: description,
        })
        res.json({data})
    }catch(err) {
        console.log(err);
        res.sendStatus(500)
    }
}