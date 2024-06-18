import BDD from "../model/BDD.js"
import User from "../model/User.js"

/**
 * @swagger
 * /role:
 *   patch:
 *     summary: Update a user's role by ID
 *     tags: 
 *       - Role
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 description: The ID of the user to update
 *               role_id:
 *                 type: integer
 *                 description: The new role ID of the user
 *     responses:
 *       200:
 *         description: User role updated successfully
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
        const {role_id, id} = req.body
        const data = await user.updateRoleById({
            role_id: role_id,
            id: id
        })
        console.log(data)
        res.json({data})
    }catch(err) {
        console.log(err);
        res.sendStatus(500)
    }
}