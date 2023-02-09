import React from "react"

const StoreContext = React.createContext([])

const initialState = {
    user: {},
    isLogged: false
}

export {StoreContext, initialState}


