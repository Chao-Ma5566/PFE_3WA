import BDD from "../model/BDD.js"
import Products from "../model/Products.js"
import PictureProducts from "../model/PictureProducts.js"
import Dimensions from "../model/Dimensions.js"

export default async(req, res) => {
    try {
        const myBDD = new BDD()
        const products = new Products(myBDD)
        const pictureProducts = new PictureProducts(myBDD)
        const dimensions = new Dimensions(myBDD)
        const { name, description, price, collection_id, stock, material, files, height, width, depth, seat_height, seat_depth } = req.body
        const data = await products.create({
            name: name,
            description: description,
            price: price,
            collection_id: collection_id,
            stock: stock,
            material: material
        })
        const product_id = data.result.insertId
        const dataPicture = await pictureProducts.create({ url: files, caption: name, product_id: product_id })
        const dataDimensions = await dimensions.create({
            product_id: product_id, 
            height: height, 
            width: width, 
            depth: depth, 
            seat_height: seat_height, 
            seat_depth: seat_depth
        })
        res.json({ data, dataPicture, dataDimensions })
    }
    catch (err) {
        console.log(err);
        res.sendStatus(500)
    }
}
