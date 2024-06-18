import BDD from "../model/BDD.js"
import User from "../model/User.js"

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Retrieve a user by ID
 *     tags: 
 *       - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the user to retrieve
 *     responses:
 *       200:
 *         description: A user
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   description: The user data
 *                   properties:
 *                     id:
 *                       type: integer
 *                       description: The user ID
 *                     last_name:
 *                       type: string
 *                       description: The user's last name
 *                     first_name:
 *                       type: string
 *                       description: The user's first name
 *                     birthday:
 *                       type: string
 *                       format: date
 *                       description: The user's birthday
 *                     email:
 *                       type: string
 *                       description: The user's email
 *       500:
 *         description: Internal server error
 */
export default async (req, res) => {
    try {
        
        const user = new User(BDD)
        const {id} = req.params
        const data = await user.getByID({id})
        res.json({data})
    }catch(err) {
        console.log(err);
        res.sendStatus(500)
    }
}