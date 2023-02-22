import axios from "axios"
import {useState, useEffect, useContext} from "react"
import { useParams } from "react-router-dom";
import {BASE_URL} from "../tools/constante.js"
import { NavLink, Navigate } from "react-router-dom"
import ConfirmationWindow from "./ConfirmationWindow.jsx"
import {StoreContext} from "../tools/context.js"

const Profil = (props) => {
    const { userId } = useParams();
    const [state, dispatch] = useContext(StoreContext);
    const [userInfo, setUserInfo] = useState(null)
    const [isSure, setIsSure] = useState(false)
    const [isDelete, setIsDelete] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
        setIsLoading(true)
        axios.post(`${BASE_URL}/getUserById`, { id: userId })
            .catch(err => console.log(err))
            .then(res => setUserInfo(res.data.data[0]))
            .then(res => setIsLoading(false))
    }, [userId])
    
    const reformeDate = (data) =>{
        const date = new Date(data);
        const formattedDate = date.toLocaleDateString("fr-CA");
        return formattedDate
    }
    const handleDelete = () =>{
        axios.post(`${BASE_URL}/admin/deleteUser`,{id:userId})
        .then(res=>{
                if(res.data.data.affectedRows > 0){
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
            {isDelete && 
                    <Navigate to={state.user.admin ? "/admin/users" : "/logout"} replace={true} /> 
            }
            <h2>User Information</h2>
            <NavLink to={`/updateProfil/${userId}`}>
                <p>Modifier Info</p>
            </NavLink>
            <NavLink to={`/updatePassword/${userId}`}>
                <p>Modifier Mots de Passe</p>
            </NavLink>
            <h3>Nom: {userInfo.last_name}</h3>
            <h3>Prénom: {userInfo.first_name}</h3>
            <p>User ID: {userInfo.id}</p>
            <p>Email: {userInfo.email}</p>
            <p>Date de naissance: {reformeDate(userInfo.birthday)}</p>
            <p>Date d'inscription: {reformeDate(userInfo.registration_date)}</p>
            <p>Dernière connexion: {reformeDate(userInfo.last_connection)}</p>
            <button onClick={handleCheck}>Supprimer le compte</button>
            {isSure && 
                <ConfirmationWindow isOpen={handleCheck} deleteFunction={handleDelete} name="ce compte?" />
            }    
        </div>  
        )
}

export default Profil