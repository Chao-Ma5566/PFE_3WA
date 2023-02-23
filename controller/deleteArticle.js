import BDD from "../model/BDD.js"
import Article from "../model/Article.js"
import deleteFiles from "../config/deleteFiles.js"

export default async (req, res) => {
    try {
        const myBDD = new BDD()
        const article = new Article(myBDD)
        const {id} = req.body
        const articleInfo = await article.getById({id})
        const fileName = articleInfo.result[0].url
        
        await deleteFiles(fileName)
        const data = await article.deleted({id})
        res.json({data})
    }catch(err) {
        console.log(err);
        res.sendStatus(500)
    }
}

