import BDD from "../model/BDD.js"
import User from "../model/User.js"

export default async (req, res) => {
    try {
        const myBDD = new BDD()
        const user = new User(myBDD)
        const {id} = req.params
        const data = await user.deleteAccount({id})
        res.json({data})
    }catch(err) {
        console.log(err);
        res.sendStatus(500)
    }
}