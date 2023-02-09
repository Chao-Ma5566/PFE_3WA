import axios from "axios"
import { useState } from "react"
import {BASE_URL} from "../tools/constante.js"
import {lengthLimit, checkVide} from "../tools/inputCheck.js"

const Register = (props) => {
    const initialValue = { nom: "", prenom: "", email: "", password: "", birthday: "2018-07-22" }
    const [userInfo, setUserInfo] = useState(initialValue)

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!checkVide(Object.values(userInfo))){
            alert("Champ obligatoire vide") 
            return
        }
        axios.post(`${BASE_URL}/addUser`, {
            last_name: userInfo.nom,
            first_name: userInfo.prenom,
            email: userInfo.email,
            password: userInfo.password,
            birthday: userInfo.birthday
        })
        setUserInfo(initialValue)
    }
    const handleChange = (e) => {
        if(!lengthLimit(250, [e.target.value])){
            alert("tous les infos sont limit à 250 caractaires") 
            return
        }
        let newInfo = { ...userInfo, [e.target.name]: e.target.value }
        setUserInfo(newInfo)
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="nom" value={userInfo.nom} placeholder="nom" onChange={(e)=>handleChange(e)} />
            <input type="text" name="prenom" value={userInfo.prenom} placeholder="prenom" onChange={(e)=>handleChange(e)} />
            <input type="email" name="email" value={userInfo.email} placeholder="email" onChange={(e)=>handleChange(e)} />
            <input type="password" name="password" value={userInfo.password} placeholder="password" onChange={(e)=>handleChange(e)} />
            <label for="start">Votre date de naissance:</label>
            <input type="date" name="birthday" value={userInfo.birthday} onChange={(e)=>handleChange(e)}/>
            <button type="submit">Valider</button>
        </form>
    );
}

export default Register
