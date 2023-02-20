import {Navigate} from "react-router-dom"
import {useContext} from "react"
import {StoreContext} from "../tools/context.js"

const PrivateRoute = ({children, auth = null}) => {
    /* 
    * On recuperer user qui se trouve dans notre state 
    * du reducer grace au destructuring
    */
    const [{user, isLogged}] = useContext(StoreContext);
    
    // On recupere les variable qui permette de savoir si l'utilisateur est connecter et/ou admin
    const {admin} = user;
    
    // On verrifie si a route est reserver au admin 
    const isLimitedToAdmin = auth === "admin";
    // On verrifie si a route est reserver au utilisateur connecter
    const isLimitedToConnected = auth === "user";
    
    // si il n'y a pas de restriction sur cette route
    const isPublic = auth === null
  
    /* 
    * Si la route est reserver aux admin et qu'il est connecter en tant qu'admin
    * OU
    * Si la route est reserver aux utilisateur et qu'il est connecter
    */
  const isUserAuthorized = isPublic || (isLimitedToAdmin && admin) || (isLimitedToConnected && isLogged);

  return isUserAuthorized ? children : <Navigate to="/login" />;
}


export default PrivateRoute