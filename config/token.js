import jwt from "jsonwebtoken"

const privateKey = 'eyJlbWFpbCI6InRlc3RAdGVzdC5mciIsInVzZXIiOnRydWUsImFkbWluIjp0cnVlLCJpYXQiOjE2NjY1MjQyNjYsImV4cCI6MTY2NjUyNzg2Nn0'

/*
*generate jwtToken and send back 
*@param {objet} userData get from emailcheck, userId, user name and role_id
*/
export const generateToken = async (userData) => {
    try {
        const token = await jwt.sign(userData, privateKey)
        return token
    } catch(err) {
        console.log(err)
        return 
    }
}
/*
*check jwtToken from local stocage and send back the info
*@param {string} jwtToken 
*/
export const verifyToken = async (token) => {
    try {
        const jwtToken = await jwt.verify(token, privateKey)
        return jwtToken
    }
    // eslint-disable-next-line no-unused-vars
    catch(err){
        // token invalide
        // eslint-disable-next-line no-unused-vars
        return err
    }
}