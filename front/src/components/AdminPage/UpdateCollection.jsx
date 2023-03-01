import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from "../../tools/constante.js"
import { lengthLimit, checkVide } from "../../tools/inputCheck.js"
import ConfirmationWindow from "../ConfirmationWindow.jsx"
import { useParams } from "react-router-dom"


const UpdateCollection = (props) => {
    const { collectionId } = useParams();
    const [collectionInfo, setCollectionInfo] = useState([])
    const [messageErr, setMessageErr] = useState("")
    const [isLoading, setIsLoading] = useState(true)
    const [isSure, setIsSure] = useState(false)
    const [isDelete, setIsDelete] = useState(false)
    
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
    
    const handleDelete = () => {
        axios.post(`${BASE_URL}/admin/`,{id:collectionId})
        .then(res=>{
                if(res.data.data.affectedRows > 0){
                    setIsDelete(true)
                }
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
    
    const handleCheck = () =>{
        setIsSure(!isSure)
    }
    
    console.log(collectionInfo)
    
    if(isLoading){
        return <div>Loading....</div>
    }
    
    return (
        <div className="container-admin">
            <div className="admin-header flex justify-between">
                <div>
                    <h2>Modifier la collection</h2>
                    <p>Title est limité à 250 caractères, Description est limité à 510 caractères.</p>
                    {messageErr.length > 0 && <p className="rounded py-2 px-4 bg-primary">{messageErr}</p>}
                </div>
                <div className="flex items-center">
                    <button onClick={handleCheck}
                        className="rounded bg-primary hover:bg-gray-900 p-2">
                        Supprimer collection
                    </button>
                </div>
            </div>
            <form onSubmit={(e) => handleSubmit(e)}
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            >
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
            {isSure && 
                <ConfirmationWindow isOpen={handleCheck} deleteFunction={handleDelete} name="cette collection?" />
            }  
        </div>
    )
}

export default UpdateCollection