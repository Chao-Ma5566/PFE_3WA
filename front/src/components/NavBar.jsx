import { NavLink } from "react-router-dom"
import {useContext} from 'react'
import { StoreContext } from "../tools/context.js"
import {BASE_URL} from "../tools/constante.js"
import Logged from "./Logged.jsx"
import AdminSidebar from "./AdminPage/AdminSidebar.jsx"

const NavBar = (props) => {
    const [state, dispatch] = useContext(StoreContext);

    
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