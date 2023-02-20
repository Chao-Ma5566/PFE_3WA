import { NavLink } from "react-router-dom"
import {useEffect,useContext} from 'react'
import axios from 'axios'
import { StoreContext } from "../tools/context.js"
import {BASE_URL} from "../tools/constante.js"
import Logged from "./Logged.jsx"
import AdminSidebar from "./AdminPage/AdminSidebar.jsx"

const NavBar = (props) => {
    const [state, dispatch] = useContext(StoreContext);
    
     useEffect(() => {
         // on verrifie que l'utilisateur n'est pas deja connecter
    if(!state.isLogged){
      // on recupere le token dans le localStorage
      const jwtToken = localStorage.getItem("jwtToken")
      // Si on a un token
      if (jwtToken) {
        // on met le token 
        axios.defaults.headers.common["Authorization"] = `Bearer ${jwtToken}`
        // on verrifie le token puis on sauvegarde les donner dans le reducer
        axios.get(`${BASE_URL}/relogged`)
        .then(res => dispatch({
          type:"LOGIN",
          payload:res.data.result
        }))
      }
    }
  },[])
    
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">
                            Accueil
                        </NavLink>
                    </li>
                {state.isLogged ?   
                    <Logged />
                 : 
                    (<li>
                        <NavLink to="/login">
                            Login
                        </NavLink>
                        
                    </li>)
                }    
                </ul>
            </nav>
            {state.user.admin &&
                <AdminSidebar />
            }
        </div>
        )
}

export default NavBar