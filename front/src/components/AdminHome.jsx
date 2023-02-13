import {useState,useContext} from "react"
import axios from "axios"
import {BASE_URL} from "../tools/constante.js"
// import { StoreContext } from "../tools/context.js"
import AdminSidebar from "./AdminPage/AdminSidebar.jsx"
import UserList from "./AdminPage/UserList.jsx"
    
   

const AdminHome = () => {
    
    // const [state, dispatch] = useContext(StoreContext);
    const [messageErr, setMessageErr] = useState("")
    
    return(
        <div className="admin">
            <AdminSidebar />
        </div>
    )
}

export default AdminHome


