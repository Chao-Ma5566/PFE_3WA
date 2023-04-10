import Logged from "./Logged.jsx"
import { NavLink } from "react-router-dom"
import { StoreContext } from "../tools/context.js"
import {useContext, useState, useEffect} from 'react'
import logo from "../assert/img/logoblack.svg"
import profil from "../assert/icon/userIcon/users.svg"
import burger from "../assert/icon/userIcon/burgerMenu.svg"
import close from "../assert/icon/userIcon/closeX.svg"
import mail from "../assert/icon/userIcon/envelope.svg"
import map from "../assert/icon/userIcon/map.svg"
import twitter from "../assert/icon/userIcon/twitter.svg"
import instagram from "../assert/icon/userIcon/instagram.svg"
import contact from "../assert/icon/userIcon/phone.svg"

const NavBar = (props) => {
    const [state, dispatch] = useContext(StoreContext);
    const [scrolled, setScrolled] = useState(false);
    const [bugerMenuOpen, setBurgerMenuOpen] = useState(false)
    const [viewWidth, setViewWidth] = useState(window.innerWidth)
    
    useEffect(() => {
        const onScroll = () => {
            window.scrollY > 50 ? setScrolled(true) : setScrolled(false);
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [scrolled])
    
    useEffect(()=>{
        const changeWidth = () => {
            setViewWidth(window.innerWidth)
        }
        
        window.addEventListener("resize", changeWidth)
        
        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    }, [viewWidth])
    
    const handlenMenu = () => {
        setBurgerMenuOpen(!bugerMenuOpen)
    }
    
    return (
            <nav className= {`sticky max-x-screen h-18 top-0 ${scrolled ? "shadow bg-neutral-50 ": ""}`}>
            {viewWidth <= 768 ? (
                <div className={`flex flex-row justify-between items-center`}>
                    <div className="w-16">
                        <NavLink className="flex flex-col items-center" to="/" title="Three Body Home">
                            <img className="w-12" src={logo} alt="Logo Three Body" />
                        </NavLink>
                    </div>
                    <div className="flex flex-row mr-4">
                    {state.isLogged ?   
                        <Logged />
                     : 
                        (<div>
                            <NavLink to="/login">
                                <img className="hover:bg-green-500 rounded-full p-2" src={profil} alt="Profil Icon" />
                            </NavLink>
                            
                        </div>)
                    }
                        <div>
                            <img className="ease-in-out rounded-full p-2 relative z-20" onClick={handlenMenu} src={bugerMenuOpen? close : burger} alt="Menu burger icon" />
                        </div>
                    </div>
                </div>
                ) : (
                <div className="mx-auto px-2 lg:px-8">
                    <div className="fixed bottom-4 right-4">
                        <div className="bg-green-500 rounded-full w-12 h-12 flex justify-center items-center drop-shadow ">
                            <img src={contact} className="full-neutral-50" alt="Contactez-Nous" />
                        </div>
                    </div>
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="w-10">
                            <NavLink className="flex flex-col items-center" to="/" title="Three Body Home">
                                <img className="w-12" src={logo} alt="Logo Three Body" />
                            </NavLink>
                        </div>
                        <div className="flex flex-row justify-around w-9/12 items-center mx-5">
                             <NavLink  className="flex md:text-sm p-2 rounded justify-center hover:bg-neutral-500 hover:text-neutral-50" to="/" title="ABOUT US">
                                ABOUT US
                            </NavLink>
                            <NavLink  className="flex md:text-sm p-2 rounded justify-center hover:bg-neutral-500 hover:text-neutral-50" to="/" title="COLLECTION">
                                COLLECTION
                            </NavLink>
                            <NavLink  className="flex md:text-sm p-2 rounded justify-center hover:bg-neutral-500 hover:text-neutral-50" to="/" title="DESIGNER">
                                DESIGNER
                            </NavLink>
                            <NavLink  className="flex md:text-sm p-2 rounded justify-center hover:bg-neutral-500 hover:text-neutral-50" to="/" title="ACTUALITES">
                                ACTUALITES
                            </NavLink>
                            <NavLink  className="flex md:text-sm p-2 rounded justify-center  mr-3 hover:bg-neutral-500 hover:text-neutral-50" to="/shop" title="E-COMMERCE">
                                E-COMMERCE
                            </NavLink>
                        </div>
                    {state.isLogged ?   
                        <Logged />
                     : 
                        (<div>
                            <NavLink to="/login">
                                <img className="hover:bg-green-500 rounded-full p-2" src={profil} alt="Profil Icon" />
                            </NavLink>
                            
                        </div>)
                    }    
                    </div>
                </div>
                )}
                <div className={bugerMenuOpen ? "fixed overflow-hidden rounded-md inset-0 top-0 right-0 left-0 bottom-0 p-3":"hidden"}>
                    <div className="bg-neutral-50 overflow-hidden rounded-md h-full w-full relative z-50 flex flex-col justify-between drop-shadow">
                       <div></div>
                       <div className="translate-y-36 tracking-wide">
                           <NavLink onClick={handlenMenu} className="flex justify-center text-lg mb-3 hover:bg-neutral-100" to="/" title="ABOUT US">
                                ABOUT US
                            </NavLink>
                            <NavLink onClick={handlenMenu} className="flex justify-center text-lg mb-3 hover:bg-neutral-100" to="/" title="COLLECTION">
                                COLLECTION
                            </NavLink>
                            <NavLink onClick={handlenMenu} className="flex justify-center text-lg mb-3 hover:bg-neutral-100" to="/" title="DESIGNER">
                                DESIGNER
                            </NavLink>
                            <NavLink onClick={handlenMenu} className="flex justify-center text-lg mb-3 hover:bg-neutral-100" to="/" title="ACTUALITES">
                                ACTUALITES
                            </NavLink>
                            <NavLink onClick={handlenMenu} className="flex justify-center text-lg mb-3 hover:bg-neutral-100" to="/shop" title="E-COMMERCE">
                                E-COMMERCE
                            </NavLink>
                        </div>
                        <div className="h-52 w-screen scale-125 -translate-x-8 translate-y-56 px-20 rotate-12 bg-gradient-to-r from-green-500 to-yellow z-0 relative">
                        </div>
                        <div className="z-10 -translate-y-10 flex flex-col justify-center">
                            <div className="text-center text-sm mb-2">
                                Nous Contacter: 
                            </div>
                            <div className="grid grid-cols-4 px-24">
                                <a href="mailto:contact.us@threebody.com" className="flex flex-col items-center" title="Notre Mail" >
                                    <img className="hover:bg-neutral-50 rounded-full p-2" src={mail} alt="Notre Mail" />
                                </a>
                                <NavLink className="flex flex-col items-center" to="/location" title="Notre Localisation">
                                    <img className="hover:bg-neutral-50 rounded-full p-2" src={map} alt="Notre Localisation" />
                                </NavLink>
                                <a target="_blank" rel="noreferrer" className="flex flex-col items-center" href="https://twitter.com/?lang=fr" title="Notre Twitter">
                                    <img className="hover:bg-neutral-50 rounded-full h-10 p-2" src={twitter} alt="Notre Twitter" />
                                </a>
                                <a target="_blank" rel="noreferrer" className="flex flex-col items-center" href="https://www.instagram.com/" title="Notre Instagram">
                                    <img className="hover:bg-neutral-50 rounded-full h-10 p-2" src={instagram} alt="Notre Instagram" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                
            </nav>
        )
}

export default NavBar