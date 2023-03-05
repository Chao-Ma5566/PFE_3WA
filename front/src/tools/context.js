import React from "react"

const StoreContext = React.createContext([])

const initialState = {
    user: {},
    isLogged: false,
    cart: [],
    products:[],
    cartItems: []
}

export {StoreContext, initialState}


