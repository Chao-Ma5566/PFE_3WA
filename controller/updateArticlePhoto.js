import BDD from "../model/BDD.js"
import PictureArticles from "../model/PictureArticles.js"
import Article from "../model/Article.js"
import deleteFile from "../config/deleteFile.js"

export default async (req, res) => {
    try {
        const myBDD = new BDD()
        const article = new Article(myBDD)
        const pictureArticles = new PictureArticles(myBDD)
        const {files, caption, id} = req.body
        const articleInfo = await article.getById({id})
        const data = await pictureArticles.update({
            url:files,
            caption: caption,
            id: id
        })
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