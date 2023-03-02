import BDD from "../model/BDD.js"
import Products from "../model/Products.js"

export default async(req, res) => {
    try {
        const myBDD = new BDD()
        const products = new Products(myBDD)
        const { id } = req.body
        const data = await products.getById({
            id: id
        })
        res.json({ data })
    }
    catch (err) {
        console.log(err);
        res.sendStatus(500)
    }
}
