import axios from "axios"
import {useState, useEffect} from "react"
import { useParams } from "react-router-dom";
import {BASE_URL} from "../tools/constante.js"

const Profil = (props) => {
    const { userId } = useParams();
    const [userInfo, setUserInfo] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
        setIsLoading(true)
        axios.post(`${BASE_URL}/getUserById`, { id: userId })
            .catch(err => console.log(err))
            .then(res => setUserInfo(res.data.data[0]))
            .then(res => setIsLoading(false))
    }, [userId])
    
    
    if(isLoading){
        return <div>Loading....</div>
    }
    
    return (
        <div>
            <h2>User Information</h2>
            <h3>Nom: {userInfo.last_name}</h3>
            <h3>Prénom: {userInfo.first_name}</h3>
            <p>User ID: {userInfo.id}</p>
            <p>Email: {userInfo.email}</p>
            <p>Date d'inscription: {userInfo.registration_date}</p>
            <p>Date de naissance: {userInfo.birthday}</p>
            <p>Dernière connexion: {userInfo.last_connection}</p>
        </div>  
        )
}

export default Profil