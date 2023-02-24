import { useEffect,useContext,useState, Fragment } from 'react'
import axios from 'axios'
import { StoreContext } from "../../tools/context.js"
import {BASE_URL, BASE_IMG} from "../../tools/constante.js"
import { NavLink } from "react-router-dom"
import ConfirmationWindow from "../ConfirmationWindow.jsx"


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
                            <h2 className="text-3xl bg-midnight text-tahiti">Title: {article.title}</h2> 
                        </NavLink>
                        <NavLink to={`/admin/updateArticle/${article.id}`}>
                            <button>Modifier article</button>
                        </NavLink>
                        <NavLink to={`/admin/updateArticlePhoto/${article.id}`}>
                            <button>Modifier Photo</button>
                        </NavLink>
                    </li>
                )
            })}d
        </ul>
        
        </Fragment >
    );
    
}

export default AdminArticles