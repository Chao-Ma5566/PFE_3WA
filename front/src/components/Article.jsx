import axios from "axios"
import {useContext, useEffect, useState, Fragment} from "react"
import {StoreContext} from "../tools/context.js"
import {BASE_URL, BASE_IMG} from "../tools/constante.js"
import { NavLink, Navigate,useParams } from "react-router-dom"

const Article = (props) => {
    const { articleId } = useParams();
    const [state, dispatch] = useContext(StoreContext);
    const [articleInfo, setArticleInfo] = useState(null)
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
    
    if(isLoading){
        return <div>Loading....</div>
    }
    
    return (
        <div>
            <img src={`${BASE_IMG}/${articleInfo.url}`} alt={articleInfo.caption} />
            <h2>{articleInfo.title}</h2>
            
            {state.user.admin &&
            <Fragment>
                <NavLink to={`/admin/updateArticle/${articleId}`}>
                    <p>Modifier article</p>
                </NavLink>
                <NavLink to={`/admin/updateArticlePhoto/${articleId}`}>
                    <p>Modifier Photo</p>
                </NavLink>
            </Fragment>
            }
            
            <p>{articleInfo.content}</p>
        </div>  
        )
}

export default Article