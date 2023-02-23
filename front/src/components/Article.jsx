import axios from "axios"
import {useContext, useEffect, useState, Fragment} from "react"
import {StoreContext} from "../tools/context.js"
import { useParams } from "react-router-dom";
import {BASE_URL, BASE_IMG} from "../tools/constante.js"
import { NavLink, Navigate } from "react-router-dom"
import ConfirmationWindow from "./ConfirmationWindow.jsx"

const Article = (props) => {
    const { articleId } = useParams();
    const [state, dispatch] = useContext(StoreContext);
    const [articleInfo, setArticleInfo] = useState(null)
    const [isSure, setIsSure] = useState(false)
    const [isDelete, setIsDelete] = useState(false)
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
    
    
    const handleDelete = () =>{
        axios.post(`${BASE_URL}/admin/deleteArticle`,{id:articleId})
        .then(res=>{
                if(res.data.data.result.affectedRows > 0){
                    setIsDelete(true)
                }
            })
    }
    
    const handleCheck = () =>{
        setIsSure(!isSure)
    }
    
    if(isLoading){
        return <div>Loading....</div>
    }
    
    return (
        <div>
            {isDelete && <Navigate to="/admin/articles" replace={true} />}
            
            <img src={`${BASE_IMG}/${articleInfo.url}`} alt={articleInfo.caption} />
            <h2>{articleInfo.title}</h2>
            
            {state.user.admin &&
            <Fragment>
                <NavLink to={`/updateArticle/${articleId}`}>
                    <p>Modifier article</p>
                </NavLink>
                <NavLink to={`/updateArticlePhoto/${articleId}`}>
                    <p>Modifier Photo</p>
                </NavLink>
                <button onClick={handleCheck}>Supprimer l'article</button>
            </Fragment>
            }
            
            <p>{articleInfo.content}</p>
            
            {isSure && 
                <ConfirmationWindow isOpen={handleCheck} deleteFunction={handleDelete} name="cet article?" />
            }
            
        </div>  
        )
}

export default Article