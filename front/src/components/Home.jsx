import React from 'react';
import { StoreContext } from "../tools/context.js"

const Home = (props) => {
    
    const  [state, dispatch] = React.useContext(StoreContext);
    return (
        <div>
            {state.isLogged ? `hello ${state.user.nom}` : "hello"} 
        </div>
    )
}

export default Home