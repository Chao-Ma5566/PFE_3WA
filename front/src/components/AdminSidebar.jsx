import { NavLink } from "react-router-dom"
import {useEffect,useContext} from 'react'
import axios from 'axios'
import { StoreContext } from "../tools/context.js"

const AdminSidebar = (props) => {
    const [state, dispatch] = useContext(StoreContext);
    
    
    
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">
                        Accueil
                    </NavLink>
                </li>
            </ul>
        </nav>
        )
}

export default AdminSidebar