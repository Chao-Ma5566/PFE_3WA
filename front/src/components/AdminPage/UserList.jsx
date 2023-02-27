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
    
    return (
        <div className="container-admin">
            <div className="admin-header">
                <h2>User Liste</h2>
            </div>
            <table className="table-fixed m-auto">
              <thead>
                <tr>
                  <th>Nom</th>
                  <th>Prénom</th>
                  <th>Email</th>
                  <th>Modifier ou Supprimer</th>
                </tr>
              </thead>
              <tbody>
              {userList.map((user, i) => {
                    return (
                        <tr>
                            <td>
                                <NavLink to={`/profil/${user.id}`}>
                                    {user.last_name}
                                </NavLink>
                            </td>
                            <td>
                                <NavLink to={`/profil/${user.id}`}>
                                    {user.first_name}
                                </NavLink>
                            </td>
                            <td>
                                {user.email}
                            </td>
                            <td>
                                <NavLink to={`/updateProfil/${user.id}`}>
                                    <button className="p-2 rounded bg-primary">Modifier</button>
                                </NavLink>
                            </td>
                        </tr>
                    )
                })}
              </tbody>
            </table>
        </div>
    );
}

export default UserList