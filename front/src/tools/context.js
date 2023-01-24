import React from "react"

const StoreContext = React.createContext([])

const initialState = {
    dragons: [],
    inputValue: ''
    
}

export {StoreContext, initialState}


