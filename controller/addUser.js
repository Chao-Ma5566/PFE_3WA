import BDD from "../model/BDD.js"
import User from "../model/User.js"

export default async (req, res) => {
    try {
        const myBDD = new BDD()
        const user = new User(myBDD)
        const {last_name, first_name, birthday, email, password} = req.body
        const data = await user.register({
            last_name: last_name,
            first_name: first_name,
            birthday: birthday,
            email: email, 
            password: password
        })
        res.json({data})
    }catch(err) {
        console.log(err);
        res.sendStatus(500)
    }
}