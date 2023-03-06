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
                isLogged: false,
                products:[],
                cartItems: []
            }

        case "PRODUCTLIST":

            return {
                ...state,
                products: action.payload,
            }

        // case "ADD_CART":
        //     //find same product index by product_id
        //     const foundProductIndex = state.cartItems.findIndex(e => e.product_id === action.payload.product_id)
        //     console.log(foundProductIndex)
        //     //if cart is empty, cover it by payload
        //     if (state.cartItems.length === 0) {
        //         return { ...state, cartItems: [action.payload] }
        //     }
        //     //if there is no same product in the cart, we add obejct direct in cart 
        //     else if (foundProductIndex === -1) {
        //         return {
        //             ...state,
        //             cartItems: [...state.cartItems, action.payload]
        //         }
        //     }
        //     //if find same product, we use index to add quantity 
        //     else if(foundProductIndex > -1){
        //         let newCart = state.cartItems
        //         newCart[foundProductIndex].quantity += action.payload.quantity
        //         console.log(newCart)
        //         return {
        //             ...state,
        //             cartItems: newCart
        //         }
        //     }
        
        case "GET_CART_ITEMS":
            
            return {
                ...state,
                cartItems: action.payload,
            }

        default:
            return state
    }
}

export { reducer }
