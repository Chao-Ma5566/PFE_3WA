import {BASE_URL, BASE_IMG} from "../tools/constante.js"
import {useContext,useState} from 'react'
import { NavLink, Navigate } from "react-router-dom"
import { StoreContext } from "../tools/context.js"
import axios from "axios"

const CartCard = ({data, setProductList, productList, index})=>{
    const [quantity, setQuantity] = useState(0)
    const [state, dispatch] = useContext(StoreContext);
    
    const handleChange = (e) =>{
        if(e.target.value >= data.stock || e.target.value + data.quantity >= data.stock || e.target.value < 0){
            return
        }
        let newProductList = productList
        newProductList.map(product=>{
            if(product.id===data.id){
                return product.quantity = Number(e.target.value)
            }
        })
        setProductList(newProductList)
    }
    
    const incre = () =>{
        //check quantity in his chart
        if(quantity >= data.stock || quantity + data.quantity >= data.stock){
            return
        }
        setQuantity(quantity+1)
    }
    const decre = () =>{
        if(quantity > 0){
            setQuantity(quantity-1)
        }
    }
    
    const addCart = () =>{
        
        if(quantity === 0){
            return
        }
        
        let newProductList = productList
        if(newProductList[index].quantity){
            newProductList[index].quantity += quantity
        }else{
            newProductList[index].quantity = quantity
        }
        setProductList(newProductList)
        dispatch({type:"PRODUCTLIST", payload: productList})
        console.log(data.quantity)
        dispatch({type:"ADD_CART", payload: {product_id: data.id, quantity:quantity}})
        axios.post(`${BASE_URL}/addCart`,{
            user_id: state.user.id, 
            product_id: data.id,
            quantity: quantity
        })
        .then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
        setQuantity(0)
    }
    
    console.log(productList)
    return (
        <div className="rounded overflow-hidden h-48 w-full flex flex-row justify-between my-2">
            <div className="object-contain w-full h-full">
                <NavLink className="text-center w-auto" to={`/product/${data.id}`}>
                    <img className="object-contain w-auto h-full" 
                        src={`${BASE_IMG}/${data.url}`} alt={data.caption} />
                </NavLink>
            </div>
            <div className="bg-gray-100 px-4 w-full">
                <h2>
                    {data.name}
                </h2>
                <div className="flex flex-row justify-between">
                    
                    <div>
                        <p>Stockage: {data.stock}</p>
                        <h5>Prix: {data.price}€</h5>
                    </div>
                    <div className="flex flex-cols justify-between">
                        <div>
                            <input type="number" value={data.quantity} className="w-16 h-8" onChange={(e)=>handleChange(e)}/>
                        </div>
                        <button onClick={()=>{addCart()}}>Ajouter</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartCard