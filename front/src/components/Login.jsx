import {useEffect, useState} from "react"
import axios from "axios"

const Login = () => {
    const initialState = {email:'',password:''}
    const [info, setInfo] = useState(initialState)
    
    const handleChange = (e) => {
        const {name,value} = e.target
        setInfo({...info, [name]:value})
    }
    
    const submit = (e) => {
        e.preventDefault()
        axios.post(`http://jianchaoma.ide.3wa.io:3001/login`,{password:info.password, email:info.email})
            .then(res => {
                if(res.data.response.response) {
                    console.log(res)
                    localStorage.setItem('jwtToken', res.data.response.token)
                    axios.defaults.headers.common['Authorization'] = 'Bearer '+res.data.response.token
                    setInfo(initialState)
                }
            })
    }
    
    
    return(
        <form onSubmit={submit}>
            <input type='text' name='email' value={info.email} onChange={handleChange} placeholder='email' />
            <input type='password' name='password' value={info.password} onChange={handleChange} placeholder='password' />
            <input type="submit" />
        </form>
    )
}

export default Login


// import axios from "axios"
// import { useState } from "react"

// const Login = () => {
    
//     const initialValue = {
//         password: "",
//         email: "",
//     }
    
//     const [userInfo, setUserInfo] = useState(initialValue)
    
//     const handleSubmit = (e) => {
//         e.preventDefault()
        
//         axios.post('http://jianchaoma.ide.3wa.io:3001/login', {
//             email: userInfo.email,
//             password: userInfo.password
//         })
//         .then(res => alert(res.data.result ? "Vous êtes conntecté" : "MDP incorrèct"))
//         setUserInfo(initialValue)
//     }

//     const handleChange = (e) => {
//         let newInfo = { ...userInfo, [e.target.name]: e.target.value }
//         setUserInfo(newInfo)
//     }

//     return (
//         <form onSubmit={handleSubmit}>
//             <input type="text" name="email" value={userInfo.email} placeholder="email" onChange={(e)=>handleChange(e)} />
//             <input type="text" name="password" value={userInfo.password} placeholder="password" onChange={(e)=>handleChange(e)} />
//             <button type="submit">Valider</button>
//         </form>
//     );
// }

// export default Login