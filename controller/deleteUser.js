import BDD from "../model/BDD.js"
import User from "../model/User.js"

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Delete a user account by ID
 *     tags: 
 *       - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the user to delete
 *     responses:
 *       200:
 *         description: User account deleted successfully
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
        
        const user = new User(BDD)
        const {id} = req.params
        const data = await user.deleteAccount({id})
        res.json({data})
    }catch(err) {
        console.log(err);
        res.sendStatus(500)
    }
}