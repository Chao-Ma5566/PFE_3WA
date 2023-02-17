import BDD from "../model/BDD.js"
import Article from "../model/Article.js"

export default async (req, res) => {
    try {
        const myBDD = new BDD()
        const article = new Article(myBDD)
        const {title, content, content2} = req.body
        const data = await article.create({
            title: title,
            content: content,
            content2: content2,
        })
        res.json({data})
    }catch(err) {
        console.log(err);
        res.sendStatus(500)
    }
}