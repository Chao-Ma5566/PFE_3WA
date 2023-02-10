import {useState,useContext} from "react"
import axios from "axios"
import {BASE_URL} from "../tools/constante.js"
import { StoreContext } from "../tools/context.js"
import {lengthLimit, checkVide} from "../tools/inputCheck.js"
    
   

const Logged = () => {
    const [state, dispatch] = useContext(StoreContext);
    
    const handleLogout = () =>{
        localStorage.removeItem('jwtToken')
        dispatch({ type: "LOGOUT" })
    }
    console.log(state)
    return(
        <div>
            <p>Vous êtes {state.user.nom}</p>
            <button onClick={handleLogout}>Déconnexion</button>
        </div>  
    )
}

export default Logged


