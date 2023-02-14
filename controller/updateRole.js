import BDD from "../model/BDD.js"
import User from "../model/User.js"

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