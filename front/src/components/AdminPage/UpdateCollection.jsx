import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from "../../tools/constante.js"
import { lengthLimit, checkVide } from "../../tools/inputCheck.js"
import { useParams } from "react-router-dom"


const UpdateCollection = (props) => {
    const { collectionId } = useParams();
    const [collectionInfo, setCollectionInfo] = useState([])
    const [messageErr, setMessageErr] = useState("")
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
        setIsLoading(true)
        axios.post(`${BASE_URL}/admin/getCollectionById`, { id: collectionId })
            .catch(err => console.log(err))
            .then(res => {
                console.log(res)
                setCollectionInfo(res.data.data.result[0])
                })
            .then(res => setIsLoading(false))
    }, [collectionId])
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if(messageErr.length > 0){
            return
        }
        if(!checkVide([collectionInfo.title, collectionInfo.description])){
            setMessageErr("Champ obligatoire vide") 
            return
        }
        
        axios.post(`${BASE_URL}/admin/updateCollection`, {
            title: collectionInfo.title,
            description: collectionInfo.description,
            id: collectionId
        }).then(res=>{
            console.log(res)
            if(res.data.data.result.affectedRows > 0){
                setMessageErr("L'informations sont bien enregistrer")
            }
        }).catch(err=>{
            console.log(err)
            return
        })
    }
    
    const handleChange = (e) => {
        setMessageErr("")
        if(!lengthLimit(collectionInfo.title, 100)){
            setMessageErr("Title est limité à 100 caractères") 
        }else if(!lengthLimit(collectionInfo.description, 5000)){
            setMessageErr("Chaque description est limité à 5000 caractères") 
        }
        let newInfo = { ...collectionInfo, [e.target.name]: e.target.value }
        setCollectionInfo(newInfo)
    }
    
    console.log(collectionInfo)
    
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
                    value={collectionInfo.title} 
                    placeholder="title" 
                    onChange={(e)=>handleChange(e)} 
                />
                <label htmlFor="description" className="text-lg">Description: </label>
                <textarea 
                    name="description" 
                    className="my-2"
                    value={collectionInfo.description} 
                    placeholder="description" 
                    onChange={(e)=>handleChange(e)} 
                    rows="15" cols="33"
                />
                <button type="submit" className="py-2 px-4 rounded bg-gray-900 hover:bg-primary">Valider</button>
            </form>
        </div>
    )
}

export default UpdateCollection