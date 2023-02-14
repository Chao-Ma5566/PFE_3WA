import {useEffect,useContext,useState} from 'react'
import axios from 'axios'
import { StoreContext } from "../../tools/context.js"
import {BASE_URL} from "../../tools/constante.js"


const UpdateRole = (props) => {
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
    
    const handleUpdate = (id)=>{
        userList(userList.filter(user => user.id !== id ))
        axios.post(`${BASE_URL}/admin/updateRole`,{id})
        
    }
    
    const reformeRole = (roleId) =>{
        if(roleId===1){
            return "Admin"
        }else if(roleId===2){
            return "User"
        }
    }
    
    const handleChange = (id, index)=>{
        const newUserList = [...userList]
        newUserList[index].role_id = id
        setUserList(newUserList)
    }
    
    
    console.log(userList)
    return (
        <ul>
            {userList.map((user, i) => {
                return (
                    <form key={i} onSubmit={() => handleUpdate(user.id) }>
                        <p>Nom:{user.last_name}</p>
                        <p>Prénom:{user.first_name}</p>
                        <p>Email:{user.email}</p>
                        <select name="role_id" onChange={(e)=> handleChange(e.target.value, i)} value={user.role_id}>
                            <option value="1" >Admin</option>
                            <option value="2">User</option>
                        </select>
                        <button type="submit">Valider</button>
                    </form>
                )
            })}
        </ul>
    );
}

export default UpdateRole