import {useContext, useEffect} from 'react'

import { NavLink } from "react-router-dom"
import { StoreContext } from "../../tools/context.js"
import axios from 'axios'

const AdminSidebar = (props) => {
    const [state, dispatch] = useContext(StoreContext);
    
    const routeList = ["Users","Collection","Produits","Commandes","Promos","Articles","Roles"]
    
    return (
        <nav className="admin_sidebar">
            <ul>
            {routeList.map((item,i) =>{
                return(
                    <li key={i}>
                        <NavLink to={`/admin/${item.toLowerCase()}`}>
                            {item}
                        </NavLink>
                    </li>
            )})}    
            </ul>
            <NavLink to={`/`}>
                Retour au boutique
            </NavLink>
        </nav>
        )
}

export default AdminSidebar