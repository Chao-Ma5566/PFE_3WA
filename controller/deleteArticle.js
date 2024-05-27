import Article from "../model/Article.js"
import BDD from "../model/BDD.js"
import deleteFile from "../config/deleteFile.js"

export default async (req, res) => {
    try {
        const myBDD = new BDD()
        const article = new Article(myBDD)
        const {id} = req.body
        const articleInfo = await article.getById({id})
        const fileName = articleInfo.result[0].url
        const data = await article.deleted({id})
        if(data.result.affectedRows > 0){
            const fileName = articleInfo.result[0].url
            await deleteFile(fileName)
        }
        res.json({data})
    }catch(err) {
        console.log(err);
        res.sendStatus(500)
    }
}

// req.param