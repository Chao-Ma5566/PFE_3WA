import {useContext} from "react"
import { StoreContext } from "../tools/context.js"
import { NavLink } from "react-router-dom"
    
   

const Logged = () => {
    const [state, dispatch] = useContext(StoreContext);
    
    return(
        <div>
            {state.user.role_id===1 && 
                <NavLink to="/Admin">
                    AdminLogo
                </NavLink>}
            <p>Welcome back {state.user.nom}</p>
            <NavLink to={`/profil/${state.user.id}`}>Profil Logo</NavLink>
            <NavLink to="/logout"><button>Déconnexion</button></NavLink>
        </div>  
    )
}

export default Logged


