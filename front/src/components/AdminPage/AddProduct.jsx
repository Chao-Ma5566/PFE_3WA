import axios from "axios"
import { useState } from "react"
import {BASE_URL} from "../../tools/constante.js"
import {lengthLimit, checkVide} from "../../tools/inputCheck.js"
import { Navigate } from "react-router-dom"

const AddProduct = (props) => {
    
    const initialValue = {
        name: "", 
        description: "",
        collection_id: "",
        stock: "",
        material: "",
        }
    const [articleInfo, setArticleInfo] = useState(initialValue)
    const [messageErr, setMessageErr] = useState("")
    const [isChangePage, setIsChangePage] = useState(false)
    
    console.log(articleInfo)
    const handleSubmit = (e) => {
        e.preventDefault()
        
        const dataFile = new FormData();
        const files = {...e.target.img.files};
        console.log(files)

        if(!checkVide(articleInfo)){
            setMessageErr("Champ obligatoire vide") 
            return
        }
        else if(files[0]===undefined){
            setMessageErr("Une photo obligatoire")
            return
        }
        console.log(files[0])
        dataFile.append('files', files[0], files[0].name)
        dataFile.append('title', articleInfo.title)
        dataFile.append('content', articleInfo.content)
        
        axios.post(`${BASE_URL}/admin/addArticle`, dataFile)
        .then(res=>{
            if(res.data.data.result.affectedRows > 0){
                setIsChangePage(true)
                return
            }
            if(res.data && res.data.data && res.data.data.response) alert(res.data.data.response)
            if(res.data.msg) alert(res.data.msg)
            setMessageErr(res.data.data.response)
        }).catch(err=>{
            console.log(err)
            return
        })
        setArticleInfo(initialValue)
    }
    
    const handleChange = (e) => {
        setMessageErr("")
        if(!lengthLimit(articleInfo.title, 100)){
            setMessageErr("Title est limité à 100 caractaires") 
            return
        }else if(!lengthLimit(articleInfo.content, 5000)){
            setMessageErr("Chaque content est limité à 5000 caractaires") 
            return
        }
        let newInfo = { ...articleInfo, [e.target.name]: e.target.value }
        setArticleInfo(newInfo)
    }

    return (
        <div>
            {isChangePage && <Navigate to="/admin/articles" replace={true} />}
            <h5>Inscription</h5>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <label htmlFor="title">Title: </label>
                <input 
                    type="text" 
                    name="title" 
                    value={articleInfo.title} 
                    placeholder="title" 
                    onChange={(e)=>handleChange(e)} 
                />
                <label htmlFor="content">Content: </label>
                <textarea 
                    name="content" 
                    value={articleInfo.content} 
                    placeholder="content" 
                    onChange={(e)=>handleChange(e)} 
                    rows="15" cols="33"
                />
                <label htmlFor="img">Cover image: </label>
                <div className="form-item">
                    <input type='file' name='img'/>
                </div>
                <button type="submit">Valider</button>
                {messageErr.length > 0 && <p>{messageErr}</p>}
            </form>
        </div>
    );
}

export default AddProduct

