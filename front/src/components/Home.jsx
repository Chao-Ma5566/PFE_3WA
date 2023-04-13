import React from 'react';
import { StoreContext } from "../tools/context.js"
import Banner from "./Banner"
import About from "./About"
import ContactHome from "./ContactHome"

const Home = (props) => {
    
    const  [state, dispatch] = React.useContext(StoreContext);
    return (
        <main className="w-full">
            <Banner />
            <About />
            <ContactHome />
        </main>
    )
}

export default Home