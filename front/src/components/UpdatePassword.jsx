import axios from "axios"
import {useState, useEffect} from "react"
import { useParams } from "react-router-dom";
import {BASE_URL} from "../tools/constante.js"
import { NavLink } from "react-router-dom"
import {lengthLimit, checkVide} from "../tools/inputCheck.js"

const UpdatePassword = (props) => {
    const { userId } = useParams();
    const [userInfo, setUserInfo] = useState({oldPassword:"", newPassword:"", id: Number(userId)})
    const [messageErr, setMessageErr] = useState("")
    const lower = new RegExp('(?=.*[a-z])')
    const upper = new RegExp('(?=.*[A-Z])')
    const number = new RegExp('(?=.*[0-9])')
    const special = new RegExp('(?=.*[@#$%^&+=!])')
    const length = new RegExp('(?=.{8,})')
    
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if(!checkVide([userInfo.newPassword, userInfo.oldPassword])){
            setMessageErr("Champ obligatoire vide") 
            return
        }
        
        axios.post(`${BASE_URL}/updatePassword`, userInfo)
        .then(res=>{
            setMessageErr(res.data.data.response)
        }).catch(err=>{
            console.log(err)
            return
        })
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
    
    console.log(userInfo)
    return (
        <div>
            <h2>Modifier Info</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="oldPassword">Votre mots de passe actuel: </label>
                <input type="password" name="oldPassword" value={userInfo.oldPassword} onChange={(e)=>handleChange(e)} />
                <label htmlFor="newPassword">Votre nouveau mots de passe :</label>
                <input type="password" name="newPassword" value={userInfo.newPassword} onChange={(e)=>handleChange(e)} />
                <button type="submit">Valider</button>
                {messageErr.length > 0 && <p>{messageErr}</p>}
            </form>
            <div>
                <h5>Le mot de passe doit comporter :</h5>
                <ul>
                    <li className={length.test(userInfo.newPassword) ? "valided" : "" }>
                        au moins 8 caractères
                    </li>
                    <li className={upper.test(userInfo.newPassword) ? "valided" : "" }>
                        au moins une lettre majuscule
                    </li>
                    <li className={lower.test(userInfo.newPassword) ? "valided" : "" }>
                        au moins une lettre minuscule
                    </li>
                    <li className={special.test(userInfo.newPassword) ? "valided" : "" }>
                        au moins un caractères special
                    </li>
                    <li className={number.test(userInfo.newPassword) ? "valided" : "" }>
                        au moinsun chiffre
                    </li>
                </ul>
            </div>
        </div>  
        )
}

export default UpdatePassword