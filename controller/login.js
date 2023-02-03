import {asyncQuery} from "../config/database.js"
import bcrypt from "bcrypt"
import {generateToken} from "../config/token.js"


const generateResponse = async (userDataSQL) => {
    // ID du role Admin en BDD
    const ADMIN_ROLE_ID = 1
    // verrifie si le user est admin return true OR false
    const admin = userDataSQL.role_id === ADMIN_ROLE_ID
    
    const userData = { 
        id:userDataSQL.id,
        nom:userDataSQL.nom,
        prenom:userDataSQL.prenom,
        email:userDataSQL.email,
        
        user:true,
        admin
    }
    try {
        const token = await generateToken(userData)
        return {response:true, admin, token}
    } catch(err){
        console.log(err)
        return
    }
}

export default async (req, res) => {
    const {password, email} = req.body
    const sql = "SELECT * FROM users WHERE email = ?"
    const paramsSql = [email]

    try {
        const result = await asyncQuery(sql, paramsSql)
        const response = await generateResponse(result[0])
        const resultCompare = await bcrypt.compare(password, result[0].password)
        res.json(resultCompare ? {response} : {response:null})
    } catch(err){
        console.log(err)
        res.sendStatus(500)
    }
}


// import {asyncQuery} from "../config/database.js"
// import bcrypt from "bcrypt"

// export default async (req, res)=>{
//     let sql = "SELECT * FROM users WHERE email = ?"
//     const {email, password} = req.body
//     const paramsSql = [email]
    
//     if(password.length > 8 && email.trim() !== ""){
        
//         try {
//             const userInfo = await asyncQuery(sql,[paramsSql])
//             const resultCompare = await bcrypt.compare(password, userInfo[0].password)
//               res.json({result:resultCompare})
//         }catch(err){
//             console.log(err)
//         }
//     } else {
//         res.json({response : " merci d'entrer les infos corr"})
//     }
// }