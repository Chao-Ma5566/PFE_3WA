import BDD from "../model/BDD.js"
import Collection from "../model/Collection.js"

export default async (req, res) => {
    try {
        const myBDD = new BDD()
        const collection = new Collection(myBDD)
        const {title, description} = req.body
        const data = await collection.create({
            title: title,
            description: description,
        })
        res.json({data})
    }catch(err) {
        console.log(err);
        res.sendStatus(500)
    }
}