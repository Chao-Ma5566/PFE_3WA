import BDD from "../model/BDD.js"
import Collection from "../model/Collection.js"

export default async (req, res) => {
    try {
        const myBDD = new BDD()
        const collection = new Collection(myBDD)
        const {id} = req.body
        const data = await collection.getById({
            id: id,
        })
        res.json({data})
    }catch(err) {
        console.log(err);
        res.sendStatus(500)
    }
}