import axios from "axios"
import { useState } from "react"
import {BASE_URL} from "../tools/constante.js"
import {lengthLimit, checkVide} from "../tools/inputCheck.js"
import { NavLink } from "react-router-dom"

const Register = (props) => {
    const initialValue = { nom: "", prenom: "", email: "", password: "", birthday: "2018-07-22" }
    const [userInfo, setUserInfo] = useState(initialValue)
    const [messageErr, setMessageErr] = useState("")
    let nowDate = new Date().toISOString().split('T')[0]

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!checkVide(userInfo)){
            setMessageErr("Champ obligatoire vide") 
            return
        }else if(nowDate < userInfo.birthday){
            setMessageErr("Date dépassé le limite") 
            return
        }
        
        axios.post(`${BASE_URL}/addUser`, {
            last_name: userInfo.nom.trim(),
            first_name: userInfo.prenom.trim(),
            email: userInfo.email.toLowerCase(),
            password: userInfo.password,
            birthday: userInfo.birthday
        }).then(res=>{
            setMessageErr(res.data.data.response)
        }).catch(err=>{
            console.log(err)
            return
        })
        setUserInfo(initialValue)
    }
    const handleChange = (e) => {
        setMessageErr("")
        if(!lengthLimit(e.target.value)){
            setMessageErr("tous les infos sont limit à 250 caractaires") 
            return
        }
        let newInfo = { ...userInfo, [e.target.name]: e.target.value }
        setUserInfo(newInfo)
    }

    return (
        <div>
            <h5>Inscription</h5>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nom">Nom: </label>
                <input type="text" name="nom" value={userInfo.nom} placeholder="nom" onChange={(e)=>handleChange(e)} />
                <label htmlFor="prenom">Prénom: </label>
                <input type="text" name="prenom" value={userInfo.prenom} placeholder="prenom" onChange={(e)=>handleChange(e)} />
                <label htmlFor="email">Email: </label>
                <input type="email" name="email" value={userInfo.email} placeholder="email" onChange={(e)=>handleChange(e)} />
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" value={userInfo.password} placeholder="password" onChange={(e)=>handleChange(e)} />
                <label htmlFor="birthday">Votre date de naissance: </label>
                <input type="date" name="birthday" value={userInfo.birthday} onChange={(e)=>handleChange(e)} max={nowDate}/>
                <button type="submit">Valider</button>
                {messageErr.length > 0 && <p>{messageErr}</p>}
            </form>
            <h5>Déjà Client?</h5>
                <NavLink to="/login">
                     Me Connecter
                </NavLink>
        </div>
    );
}

export default Register
