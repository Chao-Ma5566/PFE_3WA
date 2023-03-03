const reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":

            return {
                ...state,
                user: action.payload,
                isLogged: true
            }
        case "LOGOUT":
            
            return {
                ...state,
                user: {},
                isLogged: false
            }
            
        case "PRODUCTLIST":
            
            return {
                ...state,
                products: action.payload,
            }
        default:
            return state
    }        
}

export { reducer }
