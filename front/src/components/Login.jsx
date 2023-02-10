import {useState,useContext} from "react"
import axios from "axios"
import {BASE_URL} from "../tools/constante.js"
import { StoreContext } from "../tools/context.js"
import {lengthLimit, checkVide} from "../tools/inputCheck.js"
    
   

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
                if(res.data.response.response) {
                    dispatch({ type: "LOGIN", payload: res.data.response.data})
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
            })
    }
    
    return(
        <form onSubmit={submit}>
            <input type='text' name='email' value={info.email} onChange={handleChange} placeholder='email' />
            <input type='password' name='password' value={info.password} onChange={handleChange} placeholder='password' />
            <input type="submit" />
            {messageErr.length > 0 && <p>{messageErr}</p>}
            
        </form>
    )
}

export default Login


