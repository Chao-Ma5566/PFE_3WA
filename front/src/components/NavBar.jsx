import { NavLink } from "react-router-dom"
import {useEffect,useContext} from 'react'
import axios from 'axios'
import { StoreContext } from "../tools/context.js"
import Logged from "./Logged.jsx"
import AdminSidebar from "./AdminPage/AdminSidebar.jsx"

const NavBar = (props) => {
    const [state, dispatch] = useContext(StoreContext);
    
     useEffect(() => {
        if(!axios.defaults.headers.common['Authorization']){
            const token = localStorage.getItem("jwtToken")
        if(token){
         axios.defaults.headers.common['Authorization'] = 'Bearer '+token
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
            {state.user.role_id === 1 &&
                <AdminSidebar />
            }
        </div>
        )
}

export default NavBar