import BDD from "../model/BDD.js"
import User from "../model/User.js"

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