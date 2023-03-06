import {useEffect,useContext,useState} from 'react'
import axios from 'axios'
import { StoreContext } from "../tools/context.js"
import {BASE_URL, BASE_IMG} from "../tools/constante.js"
import { NavLink } from "react-router-dom"
import CartCard from "./CartCard.jsx"

const Cart = () => {
    const [state, dispatch] = useContext(StoreContext);
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect( () => {
            setIsLoading(false)
    }, []);
    
    useEffect(() => {
        if (!isLoading) {
            let checkQuantity = false
            let newList = state.cartItems.map(item => {
                if (item.quantity > item.stock) {
                    checkQuantity = true
                    axios.post(`${BASE_URL}/addCart`,{
                        user_id: state.user.id, 
                        product_id: item.id,
                        cart_id: state.user.cart_id, 
                        quantity: item.stock-item.quantity
                    })
                    return { ...item, quantity: item.stock }
                } else {
                    return item
                }
            })
            if (checkQuantity) {
                dispatch({ type: "GET_CART_ITEMS", payload: newList });
            }
        }
    }, [state.cartItems, dispatch, isLoading]);
    
    const getCartSum =  () => {
        let sum = 0
        state.cartItems.forEach(item=>{
            sum += item.quantity*item.price
        })
        return sum.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })
    }
    
    
    if(isLoading){
        // return <div>{!state.is Logged && <Navigate to="/login" replace={true} />}Loading...</div>
        return <div>Loading</div>
    }
    
    if(state.cartItems.length === 0){
        return (
            <div className="text-center flex flex-col items-center pt-36 h-full w-full">
                <h1>Vous n'avez pas encore de produit dans votre panier.</h1>
                <NavLink className="text-center" to={`/shop`}>
                    <p className="bg-primary py-4 px-6 rounded mt-6">Visitez notre E-Commerce</p>
                </NavLink>
            </div>    
        )
    }
    
    return (
        <div className="px-4 min-h-full w-full">
            <div className="border-b-2 border-gray-100 mb-4 py-8">
                <h2>Votre Panier: </h2>
            </div>
            <table className="table-fixed w-full max-h-96">
              <thead className="">
                <tr className="bg-neutral-100 rounded overflow-hidden">
                  <th className="py-4 text-lg">Photo</th>
                  <th className="py-4 text-lg">Nom du produit</th>
                  <th className="py-4 text-lg">Quantité</th>
                  <th className="py-4 text-lg">Prix</th>
                  <th className="py-4 text-lg">Supprimer</th>
                </tr>
              </thead>
              <tbody className="overscroll-auto overflow-y-scroll">
              {state.cartItems.map((product, i) => {
                    return (
                        <CartCard product={product} index={i} key={i}/>
                )})}
              </tbody>
              <tfoot className="sticky bottom-0 py-8">
                <tr className="bg-gray-100 rounded overflow-hidden py-2">
                    <td ></td>
                    <td ></td>
                    <td className="text-center">Total:</td>
                    <td className="text-center">{getCartSum()}</td>
                    <td className="text-center py-2 px-4 rounded bg-primary text-gray-100 my-2 hover:bg-gray-800">COMMANDER</td>
                </tr>
            </tfoot>
            </table>
        </div>
    )   
}    

export default Cart