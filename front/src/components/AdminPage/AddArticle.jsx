import axios from "axios"
import { useState } from "react"
import {BASE_URL} from "../../tools/constante.js"
import {lengthLimit, checkVide} from "../../tools/inputCheck.js"
import { NavLink, Navigate } from "react-router-dom"

const AddArticle = (props) => {
    
    const initialValue = { title: "", content: "", content2: ""}
    const [articleInfo, setArticleInfo] = useState(initialValue)
    const [messageErr, setMessageErr] = useState("")
    const [isChangePage, setIsChangePage] = useState(false)
    
    console.log(articleInfo)
    const handleSubmit = (e) => {
        e.preventDefault()
        if(!checkVide(articleInfo)){
            setMessageErr("Champ obligatoire vide") 
            return
        }
        
        axios.post(`${BASE_URL}/admin/addArticle`, {
            title: articleInfo.title.trim(),
            content: articleInfo.content,
            content2: articleInfo.content2,
        }).then(res=>{
            if(res.data.data.result.affectedRows > 0){
                setIsChangePage(true)
                return
            }
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
        }
        let newInfo = { ...articleInfo, [e.target.name]: e.target.value }
        setArticleInfo(newInfo)
    }

    return (
        <div>
            {isChangePage && <Navigate to="/admin/articles" replace={true} />}
            <h5>Inscription</h5>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title: </label>
                <input type="text" name="title" value={articleInfo.title} placeholder="title" onChange={(e)=>handleChange(e)} />
                <label htmlFor="content">Content: </label>
                <textarea 
                name="content" 
                value={articleInfo.content} 
                placeholder="content" 
                onChange={(e)=>handleChange(e)} 
                rows="15" cols="33"
                />
                <label htmlFor="content2">Deuxième Content: </label>
                <textarea
                name="content2" 
                value={articleInfo.content2} 
                placeholder="content2" 
                onChange={(e)=>handleChange(e)} 
                rows="15" cols="33"
                />
                <button type="submit">Valider</button>
                {messageErr.length > 0 && <p>{messageErr}</p>}
            </form>
        </div>
    );
}

export default AddArticle
