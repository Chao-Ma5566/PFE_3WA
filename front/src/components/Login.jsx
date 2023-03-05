import {useState,useContext} from "react"
import axios from "axios"
import {BASE_URL} from "../tools/constante.js"
import { StoreContext } from "../tools/context.js"
import {lengthLimit, checkVide} from "../tools/inputCheck.js"
import { NavLink, Navigate } from "react-router-dom"
    
   

const Login = () => {
    const [state, dispatch] = useContext(StoreContext);
    const initialState = {email:'',password:''}
    const [info, setInfo] = useState(initialState)
    const [messageErr, setMessageErr] = useState("")
    
    const handleChange = (e) => {
        setMessageErr("")
        if(!lengthLimit(e.target.value)){
            setMessageErr("tous les infos sont limit à 250 caractaires") 
            return
        }
        const {name,value} = e.target
        setInfo({...info, [name]:value})
    }
    
    const submit = (e) => {
        e.preventDefault()
        if(!checkVide(info)){
            setMessageErr("Champ obligatoire vide") 
            return
        }
        axios.post(`${BASE_URL}/login`,{password:info.password, email:info.email})
            .then(res => {
                console.log(res.data.response.response)
                if(res.data.response.response) {
                    console.log(res)
                    dispatch({ type: "LOGIN", payload: res.data.response.response})
                    dispatch({type:"GET_CART_ITEMS", payload:res.data.cart})
                    dispatch({type:"PRODUCTLIST", payload:res.data.products})
                    localStorage.setItem('jwtToken', res.data.response.token)
                    axios.defaults.headers.common['Authorization'] = 'Bearer '+res.data.response.token
                    setInfo(initialState)
                }
            })
            .catch(err => {
                if(err.response.status === 500){
                    console.clear()
                }
                setMessageErr(err.response.data.response.response)
                console.log(err)
            })
    }
    console.log(state)
    return(
        <div>
        {state.isLogged ? 
            (state.user.admin ? 
               <Navigate to="/admin" replace={true} /> 
             : <Navigate to="/" replace={true} />)
        : null}
            <h5>Déjà client?</h5>
            <form onSubmit={submit}>
                <input type='text' name='email' value={info.email} onChange={handleChange} placeholder='email' />
                <input type='password' name='password' value={info.password} onChange={handleChange} placeholder='password' />
                <button type="submit">Me Connecter</button>
                {messageErr.length > 0 && <p>{messageErr}</p>}
            
            </form>
            <div>
                <h5>Nouveau client?</h5>
                <p>Créez un compte pour suivre et gérer vos commandes, retrouver toutes vos informations personnelles et vos articles favoris.</p>
                <NavLink to="/register">
                     S'enregistrer
                </NavLink>
            </div>    
        </div>
    )
}

export default Login


