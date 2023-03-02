import BDD from "../model/BDD.js"
import PictureProducts from "../model/PictureProducts.js"
import Products from "../model/Products.js"
import deleteFile from "../config/deleteFile.js"

export default async (req, res) => {
    try {
        const myBDD = new BDD()
        const products = new Products(myBDD)
        const pictureProducts = new PictureProducts(myBDD)
        const {files, caption, id} = req.body
        const productInfo = await products.getById({id})
        const data = await pictureProducts.update({
            url:files,
            caption: caption,
            id: id
        })
        if(data.result.affectedRows > 0){
            const fileName = productInfo.result[0].url
            await deleteFile(fileName)
        }
        res.json({data})
    }catch(err) {
        console.log(err);
        res.sendStatus(500)
    }
}