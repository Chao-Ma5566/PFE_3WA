import {useState,useContext} from "react"
import axios from "axios"
import {BASE_URL} from "../tools/constante.js"
import { StoreContext } from "../tools/context.js"
import { NavLink, Navigate } from "react-router-dom"
import AdminSidebar from "./AdminSidebar.jsx"
    
   

const AdminHome = () => {
    
    const [state, dispatch] = useContext(StoreContext);
    const [messageErr, setMessageErr] = useState("")
    
    return(
        <div>
        <AdminSidebar />
        Admin Home
        </div>
    )
}

export default AdminHome


