import {useEffect,useContext,useState} from 'react'
import axios from 'axios'
import { StoreContext } from "../../tools/context.js"
import {BASE_URL} from "../../tools/constante.js"
import { NavLink } from "react-router-dom"


const UserList = (props) => {
    const [userList, setUserList] = useState([])
    // const  [state, dispatch] = React.useContext(StoreContext);
    useEffect(() => {
        axios.get(`${BASE_URL}/admin/users`)
            .then(function(response) {
                console.log(response.data.data)
                setUserList(response.data.data);
            })
            .catch(function(error) {
                console.log(error);
            });
    }, [])
    
    const deletedUser = (id)=>{
        axios.post(`${BASE_URL}/admin/deleteUser`,{id})
         setUserList(userList.filter(user => user.id !== id ))
    }
    
    return (
        <ul>
            {userList.map((user, i) => {
                return (
                    <li key={i}>
                        <NavLink to={`/profil/${user.id}`}>
                            Nom: {user.last_name} Prénom: {user.first_name}
                        </NavLink>
                        <button onClick={() => deletedUser(user.id)}>X</button>
                        <NavLink to={`/updateProfil/${user.id}`}>
                            <button>Modifier</button>
                        </NavLink>
                    </li>
                )
            })}
        </ul>
    );
}

export default UserList