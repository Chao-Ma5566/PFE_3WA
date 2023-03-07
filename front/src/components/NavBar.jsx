import Logged from "./Logged.jsx"
import { NavLink } from "react-router-dom"
import { StoreContext } from "../tools/context.js"
import {useContext, useState, useEffect} from 'react'
import logo from "../assert/img/logoblack.svg"
import profil from "../assert/icon/userIcon/users.svg"
import burger from "../assert/icon/userIcon/burgerMenu.svg"
import close from "../assert/icon/userIcon/closeX.svg"
import cart from "../assert/icon/userIcon/shopping-cart.svg"

const NavBar = (props) => {
    const [state, dispatch] = useContext(StoreContext);
    const [scrolled, setScrolled] = useState(false);
    const [bugerMenuOpen, setBurgerMenuOpen] = useState(false)
    const [activeIcon, setActiveIcon] = useState("")
    
    useEffect(() => {
        const onScroll = () => {
            window.scrollY > 50 ? setScrolled(true) : setScrolled(false);
        }
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])
    
    const handlenMenu = () => {
        setBurgerMenuOpen(!bugerMenuOpen)
    }
    
    return (
            <nav className= {`sticky relative max-x-screen px-2 h-18 top-0 ${scrolled ? "bg-neutral-50": ""}`}>
                <div className={`flex flex-row justify-between items-center relative ${scrolled ? "top-1": "py-4"}`}>
                    <div className="w-16">
                        <NavLink className="flex flex-col items-center" to="/" title="Three Body Home">
                            <img className="w-12" src={logo} alt="Logo Three Body" />
                        </NavLink>
                    </div >
                    <div className="flex flex-row gap-2 mr-4">
                        <NavLink className="flex flex-col items-center" to={`/profil/${state.user.id}`}>
                            <img className="hover:bg-green-500 rounded-full p-2" src={profil} alt="Profil Icon" />
                        </NavLink>
                        <NavLink className="flex flex-row items-center relative" to={`/cart`}>
                            <img className="hover:bg-green-500 rounded-full p-2 relative" src={cart} alt="Cart Icon" />
                            <p className={state.cartSum === 0 ? "hidden" : "relative z-10 rounded-full bg-yellow text-neutral-50 text-xs px-1 translate-y-2 -translate-x-4" }>{state.cartSum}</p>
                        </NavLink>
                        <div>
                            <img className="ease-in-out rounded-full p-2" onClick={handlenMenu} src={bugerMenuOpen? close : burger} alt="Menu burger icon" />
                        </div>
                    </div>
                </div>
                <div>
                    <div className={bugerMenuOpen ? "hi":""}>
                    </div>
                </div>
                {/*<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
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
                </div>*/}
            </nav>
        )
}

export default NavBar