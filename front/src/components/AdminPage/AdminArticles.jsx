import { useEffect,useContext,useState, Fragment } from 'react'
import axios from 'axios'
import { StoreContext } from "../../tools/context.js"
import {BASE_URL} from "../../tools/constante.js"
import { NavLink } from "react-router-dom"


const AdminArticles = (props) => {
    const [articleList, setArticleList] = useState([])
    const [isLoading, setIsLoading] = useState(true)
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
    
    const deletedUser = (id)=>{
        axios.post(`${BASE_URL}/admin/deleteArticle`,{id})
         setArticleList(articleList.filter(article => article.id !== id ))
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
                        <NavLink to={`/profil/${article.id}`}>
                            Title: {article.title} 
                        </NavLink>
                        <button onClick={() => deletedUser(article.id)}>X</button>
                    </li>
                )
            })}
        </ul>
        </Fragment >
    );
    
}

export default AdminArticles