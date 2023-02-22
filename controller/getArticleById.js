import BDD from "../model/BDD.js"
import Article from "../model/Article.js"

export default async (req, res) => {
    try {
        const myBDD = new BDD()
        const article = new Article(myBDD)
        const {id} = req.body
        const data = await article.getById({id})
        console.log(data)
        res.json({data})
    }catch(err) {
        console.log(err);
        res.sendStatus(500)
    }
}