import BDD from "../model/BDD.js"
import User from "../model/User.js"

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Retrieve a list of all users
 *     tags: 
 *       - Users
 *     responses:
 *       200:
 *         description: A list of users
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
 *                         description: The user ID
 *                       last_name:
 *                         type: string
 *                         description: The user's last name
 *                       first_name:
 *                         type: string
 *                         description: The user's first name
 *                       birthday:
 *                         type: string
 *                         format: date
 *                         description: The user's birthday
 *                       email:
 *                         type: string
 *                         description: The user's email
 *       500:
 *         description: Internal server error
 */
export default async (req, res) => {
    try {
        const myBDD = new BDD()
        const user = new User(myBDD)
        const data = await user.getAllUser()
        res.json({data})
    }catch(err) {
        console.log(err);
        res.sendStatus(500)
    }
}