import BDD from "../model/BDD.js"
import Products from "../model/Products.js"

export default async (req, res) => {
    try {
        const myBDD = new BDD()
        const products = new Products(myBDD)
        const {name, description, price, collection_id, stock, material} = req.body
        const data = await products.create({
            name: name,
            description: description,
            price: price,
            collection_id: collection_id, 
            stock: stock,
            material: material
        })
        res.json({data})
    }catch(err) {
        console.log(err);
        res.sendStatus(500)
    }
}