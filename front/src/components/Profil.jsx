import axios from "axios"
import {useState, useEffect} from "react"
import { useParams } from "react-router-dom";

const Profil = (props) => {
    const { userId } = useParams();
    const [userInfo, setUserInfo] = useState(null)
    
    
    useEffect(() => {
        axios.post("http://jianchaoma.ide.3wa.io:3001/getProfilById", { id: userId })
            .catch(err => console.log(err))
            .then(res => setUserInfo(res.data.result))

    }, [userId])
    
    console.log(userInfo)
    
    return (
        <div>
            Profil
        </div>
        )
}

export default Profil