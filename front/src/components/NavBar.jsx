import Logged from "./Logged.jsx"
import { NavLink } from "react-router-dom"
import { StoreContext } from "../tools/context.js"
import {useContext} from 'react'

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
        </div>
        )
}

export default NavBar