import BDD from "../model/BDD.js"
import Collection from "../model/Collection.js"

export default async (req, res) => {
    try {
        const myBDD = new BDD()
        const collection = new Collection(myBDD)
        const data = await collection.getAll()
        res.json({data})
    }catch(err) {
        console.log(err);
        res.sendStatus(500)
    }
}