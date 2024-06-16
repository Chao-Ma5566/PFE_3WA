import BDD from "../model/BDD.js"
import User from "../model/User.js"

/**
 * @swagger
 * /users/password:
 *   patch:
 *     summary: Update a user's password by ID
 *     tags: 
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 description: The ID of the user
 *               oldPassword:
 *                 type: string
 *                 description: The current password of the user
 *               newPassword:
 *                 type: string
 *                 description: The new password of the user
 *     responses:
 *       200:
 *         description: User password updated successfully
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
        const user = new User(myBDD)
        const {oldPassword,newPassword, id} = req.body
        
        const data = await user.updatePassewordById({
            newPassword: newPassword,
            oldPassword: oldPassword,
            id: id
        })
        console.log(data)
        res.json({data})
    }catch(err) {
        console.log(err);
        res.sendStatus(500)
    }
}