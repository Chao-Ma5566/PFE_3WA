import axios from "axios"
import { useState } from "react"
import {BASE_URL} from "../../tools/constante.js"
import {lengthLimit, checkVide} from "../../tools/inputCheck.js"
import { NavLink, Navigate } from "react-router-dom"

const AddCollection = (props) => {
    const initialValue = { title:"", description:"" }
    const [collectionInfo, setCollectionInfo] = useState(initialValue)
    const [messageErr, setMessageErr] = useState("")
    const [isChangePage, setIsChangePage] = useState(false)
    // const [isShowPassWord, setIsShowPassWord] = useState(false)
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if(!checkVide(collectionInfo)){
            setMessageErr("Champ obligatoire vide") 
        }else if(messageErr.length > 0){
            return
        }
        
        axios.post(`${BASE_URL}/admin/addCollection`, collectionInfo)
        .then(res=>{
            if(res.data.data.result.affectedRows > 0){
                    setIsChangePage(true)
                }
        }).catch(err=>{
            console.log(err)
            return
        })
        setCollectionInfo(initialValue)
    }
    const handleChange = (e) => {
        setMessageErr("")
        console.log(collectionInfo)
        if(!lengthLimit(e.target.value)){
            setMessageErr("Tous les infos sont limit à 250 caractères") 
        }
        let newInfo = { ...collectionInfo, [e.target.name]: e.target.value }
        setCollectionInfo(newInfo)
    }

    return (
            
            <div className="container-admin">
            {isChangePage && <Navigate to="/admin/collection" replace={true} />}
            <div className="admin-header">
                <div>
                    <h2>Créer une nouvelle collection</h2>
                    <p>Title est limité à 250 caractères, Description est limité à 510 caractères.</p>
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
                <label htmlFor="description" className="text-lg">description: </label>
                <textarea 
                    name="description" 
                    className="my-2"
                    value={collectionInfo.description} 
                    placeholder="content" 
                    onChange={(e)=>handleChange(e)} 
                    rows="15" cols="33"
                />
                <button type="submit" className="py-2 px-4 rounded bg-gray-900 hover:bg-primary">Valider</button>
            </form>
        </div>
    );
}

export default AddCollection
