import axios from "axios"
import { useEffect, useState } from "react"
import {BASE_URL, BASE_IMG} from "../../tools/constante.js"
import { useParams,Navigate } from "react-router-dom"
import {lengthLimit, checkVide} from "../../tools/inputCheck.js"

const UpdateArticlePhoto = (props) => {
    const { articleId } = useParams();
    const [articleInfo, setArticleInfo] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [messageErr, setMessageErr] = useState("")
    const [isChangePage, setIsChangePage] = useState(false)
    
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
        const dataFile = new FormData();
        const files = {...e.target.img.files};
        console.log(files)

        if(!checkVide(articleInfo.caption)){
            setMessageErr("Champ obligatoire vide") 
            return
        }
        
        console.log(files[0])
        dataFile.append('files', files[0], files[0].name)
        dataFile.append('caption', articleInfo.caption)
        dataFile.append('id', articleId)
        
        axios.post(`${BASE_URL}/admin/updateArticlePhoto`, dataFile)
        .then(res=>{
            console.log(res)
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
    }
    
    const handleChange = (e) => {
        setMessageErr("")
        if(!lengthLimit(articleInfo.caption, 100)){
            setMessageErr("Title est limité à 100 caractaires") 
        }
        let newInfo = { ...articleInfo, [e.target.name]: e.target.value }
        setArticleInfo(newInfo)
    }
    
    if(isLoading){
        return <div>Loading....</div>
    }
    
    return (
        <div>
            {isChangePage && <Navigate to={`/article/${articleId}`} replace={true} />}
            <h2>{articleInfo.title}</h2>
            
            <form onSubmit={handleSubmit} encType="multipart/form-data"
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <img src={`${BASE_IMG}/${articleInfo.url}`} alt={articleInfo.caption} />
                <label htmlFor="img">Cover image: </label>
                <div className="form-item">
                    <input type='file' name='img'/>
                </div>
                <label htmlFor="caption">Caption: </label>
                <input 
                    type="text" 
                    name="caption" 
                    value={articleInfo.caption} 
                    placeholder="caption" 
                    onChange={(e)=>handleChange(e)} 
                />
                <button type="submit" 
                className="bg-gray-500 hover:bg-gray-700 font-satoshi py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                Valider
                </button>
                {messageErr.length > 0 && <p>{messageErr}</p>}
            </form>
            <p>{articleInfo.content}</p>
        </div>  
        )
}

export default UpdateArticlePhoto