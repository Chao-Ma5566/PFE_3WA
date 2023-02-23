import { useEffect,useContext,useState, Fragment } from 'react'
import axios from 'axios'
import { StoreContext } from "../../tools/context.js"
import {BASE_URL, BASE_IMG} from "../../tools/constante.js"
import { NavLink } from "react-router-dom"
import ConfirmationWindow from "../ConfirmationWindow.jsx"


const AdminArticles = (props) => {
    const [articleList, setArticleList] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isSure, setIsSure] = useState(false)
    const [deleteId, setDeleteId] = useState(0)
    // const  [state, dispatch] = React.useContext(StoreContext);
    useEffect(() => {
        setIsLoading(true)
        axios.get(`${BASE_URL}/admin/articles`)
            .then(function(response) {
                setArticleList(response.data.data.result);
            })
            .catch(function(error) {
                console.log(error);
            })
            .then(res => setIsLoading(false))
    }, [])
    
    const deletedArticle = (id)=>{
        axios.post(`${BASE_URL}/admin/deleteArticle`,{id})
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
         setArticleList(articleList.filter(article => article.id !== id ))
    }
    
    const handleCheck = (id) =>{
        setDeleteId(id)
        setIsSure(!isSure)
    }
    
    if(isLoading){
        return <div>Loading....</div>
    }
    
    return (
        <Fragment >
        <div>
            <NavLink to={`/admin/addArticle`}><button>Créer un nouvel article</button></NavLink>
        </div>
        
        <ul>
            {articleList.map((article, i) => {
                return (
                    <li key={i}>
                    <img src={`${BASE_IMG}/${article.url}`} alt={article.caption} />
                        <NavLink to={`/article/${article.id}`}>
                            Title: {article.title} 
                        </NavLink>
                        <NavLink to={`/updateArticle/${article.id}`}>
                            <button>Modifier article</button>
                        </NavLink>
                        <NavLink to={`/updateArticlePhoto/${article.id}`}>
                            <button>Modifier Photo</button>
                        </NavLink>
                    </li>
                )
            })}
        </ul>
        {isSure && 
                <ConfirmationWindow isOpen={handleCheck} deleteFunction={deletedArticle(deleteId)} name="cet article?" />
            }   
        </Fragment >
    );
    
}

export default AdminArticles