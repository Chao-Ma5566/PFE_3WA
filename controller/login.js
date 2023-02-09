import BDD from "../model/BDD.js"
import User from "../model/User.js"
import {generateToken} from "../config/token.js"



const generateResponse = async (userDataSQL) => {
    // ID du role Admin en BDD
    const ADMIN_ROLE_ID = 1
    // verrifie si le user est admin return true OR false
    const admin = userDataSQL.role_id === ADMIN_ROLE_ID
    
    const userData = { 
        id:userDataSQL.id,
        nom:userDataSQL.last_name,
        prenom:userDataSQL.first_name,
        email:userDataSQL.email,
        
        user:true,
        admin
    }
    try {
        const token = await generateToken(userData)
        return {response:true, admin, token, data:{
            nom: userDataSQL.last_name,
            prenom: userDataSQL.first_name,
            id: userDataSQL.id,
            role_id: userDataSQL.role_id,
        }}
    } catch(err){
        console.log(err)
        return
    }
}

export default async (req, res) => {

    try {
        const myBDD = new BDD()
        const user = new User(myBDD)
        const {email, password} = req.body
        const result = await user.login({email: email, password: password})
        if(!result.data){
            return res.status(500).json({response:result})
        }
        const response = await generateResponse(result.data[0])
        res.json(result.response ? {response} : {response:null})
    } catch(err){
        console.log(err)
        res.sendStatus(500)
    }
}

