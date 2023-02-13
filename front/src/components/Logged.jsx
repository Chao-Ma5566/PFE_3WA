import {useState,useContext} from "react"
import axios from "axios"
import {BASE_URL} from "../tools/constante.js"
import { StoreContext } from "../tools/context.js"
import {lengthLimit, checkVide} from "../tools/inputCheck.js"
import { NavLink, Navigate } from "react-router-dom"
    
   

const Logged = () => {
    const [state, dispatch] = useContext(StoreContext);
    
    const handleLogout = () =>{
        localStorage.removeItem('jwtToken')
        // delete axios.defaults.headers.common['Authorization']
        dispatch({ type: "LOGOUT" })
    }
    return(
        <div>
            {state.user.role_id===1 && <NavLink to="/Admin">
                        AdminLogo
                    </NavLink>}
            <p>Welcome back {state.user.nom}</p>
            <button onClick={handleLogout}>Déconnexion</button>
        </div>  
    )
}

export default Logged


