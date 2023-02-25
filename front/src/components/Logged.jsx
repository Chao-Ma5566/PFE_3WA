import { NavLink } from "react-router-dom"
import { StoreContext } from "../tools/context.js"
import {useContext} from "react"

const Logged = () => {
    const [state, dispatch] = useContext(StoreContext);
    
    return(
        <div>
            {state.user.admin && 
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


