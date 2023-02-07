import axios from "axios"
import { useState } from "react"
import {BASE_URL} from "../tools/constante.js"

const Register = (props) => {
    const initialValue = { nom: "", prenom: "", email: "", password: "", birthday: "2018-07-22" }
    const [userInfo, setUserInfo] = useState(initialValue)

    const handleSubmit = (e) => {
        e.preventDefault()

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
        let newInfo = { ...userInfo, [e.target.name]: e.target.value }
        setUserInfo(newInfo)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="nom" value={userInfo.nom} placeholder="nom" onChange={(e)=>handleChange(e)} />
            <input type="text" name="prenom" value={userInfo.prenom} placeholder="prenom" onChange={(e)=>handleChange(e)} />
            <input type="text" name="email" value={userInfo.email} placeholder="email" onChange={(e)=>handleChange(e)} />
            <input type="text" name="password" value={userInfo.password} placeholder="password" onChange={(e)=>handleChange(e)} />
            <label for="start">Votre date de naissance:</label>
            <input type="date" name="birthday" value={userInfo.birthday} onChange={(e)=>handleChange(e)}/>
            <button type="submit">Valider</button>
        </form>
    );
}

export default Register
