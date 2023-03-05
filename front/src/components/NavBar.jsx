import Logged from "./Logged.jsx"
import { NavLink } from "react-router-dom"
import { StoreContext } from "../tools/context.js"
import {useContext, useState, useEffect} from 'react'

const NavBar = (props) => {
    const [state, dispatch] = useContext(StoreContext);
    const [scrolled, setScrolled] = useState(false);
    
    useEffect(() => {
        const onScroll = () => {
            window.scrollY > 50 ? setScrolled(true) : setScrolled(false);
        }
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])
    
    return (
            <nav className= {`sticky top-0 ${scrolled ? "bg-neutral-50": "p-2"}`}>
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <ul className="relative flex h-16 items-center justify-between">
                        <li>
                            <NavLink to="/">
                                Accueil
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/shop">
                                E-Commerce
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/cart">
                                Cart
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
                </div>
            </nav>
        )
}

export default NavBar