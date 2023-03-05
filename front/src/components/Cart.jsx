import {useEffect,useContext,useState} from 'react'
import axios from 'axios'
import { StoreContext } from "../tools/context.js"
import {BASE_URL, BASE_IMG} from "../tools/constante.js"
import { NavLink, Navigate } from "react-router-dom"
import CartCard from "./CartCard.jsx"

const Cart = () => {
    const [state, dispatch] = useContext(StoreContext);
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect( () => {
            if (state.cartItems.length > 0){
                setIsLoading(false)
            }
            else if(state.products.length > 0 || state.cartItems === []) {
               getCartItemsArray();
               setIsLoading(false)
            }
            else {
               setIsLoading(true);
                axios
                  .get(`${BASE_URL}/products`)
                  .then(function (response) {
                    dispatch({ type: "PRODUCTLIST", payload: response.data.data.result});
                    getCartItemsArray();
                  })
                  .catch(function (error) {
                    console.log(error);
                  })
                  .finally(()=>setIsLoading(false))
              }
    }, []);
    
    
    const getCartItemsArray =  () => {
        const data =  state.cart.map(item => {
        const product = state.products.find(p => p.id === item.product_id);
        return {
            id: product.id,
            url: product.url,
            stock: Number(product.stock),
            name: product.name,
            price: product.price,
            quantity: Number(item.quantity),
            caption: product.caption
        };
        });
        console.log(data)
        dispatch({ type: "GET_CART_ITEMS", payload: data});
        setIsLoading(false)
    }
    
    const getCartSum =  () => {
        let sum = 0
        state.cartItems.forEach(item=>{
            sum += item.quantity*item.price
        })
        return sum.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })
    }
    
    // const incre = (index) =>{
    //     //check quantity in his chart
    //     // if(e.targer.value >= cartItems[index].stock || quantity + data.quantity >= data.stock){
    //     //     return
    //     // }
    //     let newList = state.cartItems
    //     newList[index].quantity = newList[index].quantity + 1
    //     console.log(newList)
    //     dispatch({ type: "GET_CART_ITEMS", payload: newList});
    // }
    // const decre = (index) =>{
    //     // if(quantity > 0){
    //     //     setQuantity(quantity-1)
    //     // }
    //     let newList = state.cartItems
    //     newList[index].quantity = newList[index].quantity - 1
    //     console.log(newList)
    //     dispatch({ type: "GET_CART_ITEMS", payload: newList});
    // }
    console.log()
    
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
                  <th className="py-4 text-lg">Nom du produits</th>
                  <th className="py-4 text-lg">Quantité</th>
                  <th className="py-4 text-lg">Prix</th>
                  <th className="py-4 text-lg">Supprimer</th>
                </tr>
              </thead>
              <tbody className="overscroll-auto overflow-y-scroll">
              {state.cartItems.map((product, i) => {
                    return (
                        <CartCard product={product} index={i} />
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