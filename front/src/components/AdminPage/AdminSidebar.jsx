import { NavLink } from "react-router-dom"
import {useEffect,useContext} from 'react'
import axios from 'axios'
import { StoreContext } from "../../tools/context.js"

const AdminSidebar = (props) => {
    const [state, dispatch] = useContext(StoreContext);
    
    const routeList = ["Users","Collection","Produits","Commandes","Promos","Articles"]
    
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
        </nav>
        )
}

export default AdminSidebar