import AdminSidebar from "./AdminSidebar.jsx"
import { Outlet } from "react-router-dom"

const LayerAdmin = () => {
    return(
        <div className="flex w-full min-h-screen font-satoshi bg-gray-800">
            <AdminSidebar />
            <Outlet />
        </div>
    )
}

export default LayerAdmin