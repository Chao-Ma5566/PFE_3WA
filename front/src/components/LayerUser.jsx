import NavBar from "./NavBar.jsx"
import { Outlet } from "react-router-dom"

const LayerUser = () => {
    return(
        <div className="w-full min-h-screen font-satoshi">
            <NavBar />
            <Outlet />
        </div>
    )
}

export default LayerUser