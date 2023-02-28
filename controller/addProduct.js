import BDD from "../model/BDD.js"
import Products from "../model/Products.js"
import PictureProducts from "../model/PictureProducts.js"

export default async (req, res) => {
    try {
        const myBDD = new BDD()
        const products = new Products(myBDD)
        const pictureProducts = new PictureProducts(myBDD)
        const {name, description, price, collection_id, stock, material, files} = req.body
        const data = await products.create({
            name: name,
            description: description,
            price: price,
            collection_id: collection_id, 
            stock: stock,
            material: material
        })
        const product_id = data.result.insertId
        const dataPicture = await pictureProducts.create({url:files,caption:name,product_id:product_id})
        res.json({data, dataPicture})
    }catch(err) {
        console.log(err);
        res.sendStatus(500)
    }
}