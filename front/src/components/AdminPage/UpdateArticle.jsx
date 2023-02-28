import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from "../../tools/constante.js"
import { lengthLimit, checkVide } from "../../tools/inputCheck.js"

import { useParams } from "react-router-dom"


const UpdateArticle = (props) => {
    const { articleId } = useParams();
    const [articleInfo, setArticleInfo] = useState([])
    const [messageErr, setMessageErr] = useState("")
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
        setIsLoading(true)
        axios.post(`${BASE_URL}/getArticleById`, { id: articleId })
            .catch(err => console.log(err))
            .then(res => {
                setArticleInfo(res.data.data.result[0])
                })
            .then(res => setIsLoading(false))
    }, [articleId])
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if(messageErr.length > 0){
            return
        }
        if(!checkVide([articleInfo.title, articleInfo.content])){
            setMessageErr("Champ obligatoire vide") 
            return
        }
        
        axios.post(`${BASE_URL}/admin/updateArticle`, {
            title: articleInfo.title,
            content: articleInfo.content,
            id: articleId
        }).then(res=>{
            if(res.statusText === "OK"){
                setMessageErr("L'informations sont bien enregistrer")
            }
        }).catch(err=>{
            console.log(err)
            return
        })
    }
    
    const handleChange = (e) => {
        setMessageErr("")
        if(!lengthLimit(articleInfo.title, 100)){
            setMessageErr("Title est limité à 100 caractaires") 
        }else if(!lengthLimit(articleInfo.content, 5000)){
            setMessageErr("Chaque content est limité à 5000 caractaires") 
        }
        let newInfo = { ...articleInfo, [e.target.name]: e.target.value }
        setArticleInfo(newInfo)
    }
    
    console.log(articleInfo)
    
    if(isLoading){
        return <div>Loading....</div>
    }
    
    return (
        <div className="container-admin">
            <div className="admin-header">
                <div>
                    <h2>Modifier l'article</h2>
                    <p>Utiliser Ctrl+F pour chercher title d'utilisateur, meilleur proportion de photo est 3:4</p>
                    {messageErr.length > 0 && <p className="rounded py-2 px-4 bg-primary">{messageErr}</p>}
                </div>   
            </div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="title" className="text-lg">Title: </label>
                <input 
                    type="text" 
                    className="my-2"
                    name="title" 
                    value={articleInfo.title} 
                    placeholder="title" 
                    onChange={(e)=>handleChange(e)} 
                />
                <label htmlFor="content" className="text-lg">Content: </label>
                <textarea 
                    name="content" 
                    className="my-2"
                    value={articleInfo.content} 
                    placeholder="content" 
                    onChange={(e)=>handleChange(e)} 
                    rows="15" cols="33"
                />
                <button type="submit" className="py-2 px-4 rounded bg-gray-900 hover:bg-primary">Valider</button>
            </form>
        </div>
    )
}

export default UpdateArticle