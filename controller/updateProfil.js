import BDD from "../model/BDD.js"
import User from "../model/User.js"

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
        console.log(data)
        res.json({data})
    }catch(err) {
        console.log(err);
        res.sendStatus(500)
    }
}