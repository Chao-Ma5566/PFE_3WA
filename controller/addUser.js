import BDD from "../model/BDD.js"
import Cart from "../model/Cart.js"
import User from "../model/User.js"

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Create a new user and associated cart
 *     tags: 
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               last_name:
 *                 type: string
 *                 description: The last name of the user
 *               first_name:
 *                 type: string
 *                 description: The first name of the user
 *               birthday:
 *                 type: string
 *                 format: date
 *                 description: The birthday of the user
 *               email:
 *                 type: string
 *                 description: The email of the user
 *               password:
 *                 type: string
 *                 description: The password of the user
 *     responses:
 *       200:
 *         description: User created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   description: The data of the created user
 *       500:
 *         description: Internal server error
 */
export default async (req, res) => {
    try {
        const myBDD = new BDD()
        const user = new User(myBDD)
        const cart = new Cart(myBDD)
        
        const {last_name, first_name, birthday, email, password} = req.body
        let data = await user.register({
            last_name: last_name,
            first_name: first_name,
            birthday: birthday,
            email: email, 
            password: password
        })
        //si inscritption réussir, on crée son cart direct
        if(data.response.affectedRows > 0){
            const cartId = await cart.create({user_id: data.response.insertId})
            console.log(cartId)
        }
        
        res.json({data})
    }catch(err) {
        console.log(err);
        res.sendStatus(500)
    }
}