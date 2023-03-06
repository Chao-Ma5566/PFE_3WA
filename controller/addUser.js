import BDD from "../model/BDD.js"
import User from "../model/User.js"
import Cart from "../model/Cart.js"

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