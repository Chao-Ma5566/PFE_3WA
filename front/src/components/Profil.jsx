import axios from "axios"
import {useState, useEffect} from "react"
import { useParams } from "react-router-dom";
import {BASE_URL} from "../tools/constante.js"
import { NavLink } from "react-router-dom"

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
    
    const reformeDate = (data) =>{
        const date = new Date(data);
        const formattedDate = date.toLocaleDateString("fr-CA", { year: 'numeric', month: '2-digit', day: '2-digit' });
        return formattedDate
    }
    
    if(isLoading){
        return <div>Loading....</div>
    }
    
    return (
        <div>
            <h2>User Information</h2>
            <NavLink to={`/updateProfil/${userId}`}>
                <p>Modifier logo</p>
            </NavLink>
            <h3>Nom: {userInfo.last_name}</h3>
            <h3>Prénom: {userInfo.first_name}</h3>
            <p>User ID: {userInfo.id}</p>
            <p>Email: {userInfo.email}</p>
            <p>Date de naissance: {reformeDate(userInfo.birthday)}</p>
            <p>Date d'inscription: {reformeDate(userInfo.registration_date)}</p>
            <p>Dernière connexion: {reformeDate(userInfo.last_connection)}</p>
        </div>  
        )
}

export default Profil