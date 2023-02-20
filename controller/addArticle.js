import BDD from "../model/BDD.js"
import Article from "../model/Article.js"
import PictureArticles from "../model/PictureArticles.js"
export default async (req, res) => {
    try {
        const myBDD = new BDD()
        const article = new Article(myBDD)
        const pictureArticles = new PictureArticles(myBDD)
        const {title, content, files} = req.body
        const data = await article.create({
            title: title,
            content: content
        })
        const article_id = data.result.insertId
        const dataPicture = await pictureArticles.create({url:files,caption:title,article_id:article_id})
        res.json({data, dataPicture})
    }catch(err) {
        console.log(err);
        res.sendStatus(500)
    }
}
