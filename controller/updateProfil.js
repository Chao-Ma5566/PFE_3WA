import BDD from "../model/BDD.js"
import User from "../model/User.js"

/**
 * @swagger
 * /users/profile:
 *   patch:
 *     summary: Update a user's profile by ID
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
 *                 description: The ID of the user to update
 *               last_name:
 *                 type: string
 *                 description: The new last name of the user
 *               first_name:
 *                 type: string
 *                 description: The new first name of the user
 *               birthday:
 *                 type: string
 *                 format: date
 *                 description: The new birthday of the user
 *     responses:
 *       200:
 *         description: User profile updated successfully
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
        const {last_name, first_name, birthday, id} = req.body
        const data = await user.updateProfil({
            last_name: last_name,
            first_name: first_name,
            birthday: birthday,
            id: id
        })
        res.json({data})
    }catch(err) {
        console.log(err);
        res.sendStatus(500)
    }
}