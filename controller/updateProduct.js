import BDD from "../model/BDD.js"
import Products from "../model/Products.js"
import Dimensions from "../model/Dimensions.js"

export default async(req, res) => {
    try {
        const myBDD = new BDD()
        const products = new Products(myBDD)
        const dimensions = new Dimensions(myBDD)
        const { name, description, price, collection_id, stock, material, height, width, depth, seat_height, seat_depth, id } = req.body
        const data = await products.update({
            name: name,
            description: description,
            price: price,
            collection_id: collection_id,
            stock: stock,
            material: material,
            id: id
        })
        const dataDimensions = await dimensions.update({
            product_id: id, 
            height: height, 
            width: width, 
            depth: depth, 
            seat_height: seat_height, 
            seat_depth: seat_depth
        })
        res.json({ data, dataDimensions })
    }
    catch (err) {
        console.log(err);
        res.sendStatus(500)
    }
}
