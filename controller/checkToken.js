import {verifyToken} from "../config/token.js"
import BDD from "../model/BDD.js"
import User from "../model/User.js"

export default async (req, res) => { 
    // on recupere les info d'autentification de la requette 
    const headersAuth = req.headers['authorization'] 
    // on extrait le token 
    const token = headersAuth ? headersAuth.split(' ')[1] : null
    // on decrypt le token 
    
    try { 
        const myBDD = new BDD()
        const user = new User(myBDD)
        const userData = await verifyToken(token)
        user.updateLogintimeById(userData.id)
        res.json({result:userData})
    } catch(e){
        res.json({error:e})
    }
}