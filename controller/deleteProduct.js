import BDD from "../model/BDD.js"
import Products from "../model/Products.js"
import deleteFile from "../config/deleteFile.js"

export default async(req, res) => {
    try {
        const myBDD = new BDD()
        const products = new Products(myBDD)
        const { id } = req.params
        const productInfo = await products.getById({id:id})
        const data = await products.deleted({
            id: id
        })
        if(data.result.affectedRows > 0){
            const fileName = productInfo.result[0].url
            await deleteFile(fileName)
        }
        
        res.json({ data })
    }
    catch (err) {
        console.log(err);
        res.sendStatus(500)
    }
}
