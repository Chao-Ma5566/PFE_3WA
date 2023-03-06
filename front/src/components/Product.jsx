import axios from "axios"
import {useState, useEffect, useContext} from "react"
import { useParams } from "react-router-dom";
import {BASE_URL, BASE_IMG} from "../tools/constante.js"
import { NavLink, Navigate } from "react-router-dom"
import { StoreContext } from "../tools/context.js"

const Product = (props) => {
    const { productId } = useParams();
    const [state, dispatch] = useContext(StoreContext);
    const [productInfo, setProductInfo] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [collectionList, setCollectionList] = useState([])
    const [quantity, setQuantity] = useState(0)
    
    useEffect(() => {
        setIsLoading(true)
        axios.post(`${BASE_URL}/getProductById`, { id: productId })
            .catch(err => console.log(err))
            .then(res => {
                console.log(res)
                setProductInfo(res.data.data.result[0])
        })
            .then(res => setIsLoading(false))
    }, [productId])
    
    const handleChange = (e) =>{
        if(e.target.value > productInfo.stock || e.target.value < 0){
            return
        }
        setQuantity(Number(e.target.value))
    }
    
    const incre = () =>{
        //check quantity in his chart
        if(quantity >= productInfo.stock){
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
        
        const productIndex = state.cartItems.findIndex(e=>e.id === Number(productId))
        if(productIndex === -1){
            let newProductList = state.cartItems
            const newData = {
                id: Number(productId), 
                url: productInfo.url, 
                stock: productInfo.stock, 
                name: productInfo.name,
                price: productInfo.price,
                quantity: quantity,
                caption:productInfo.caption
            }
            newProductList.push(newData)
            dispatch({type:"GET_CART_ITEMS", payload: newProductList})
        }else{
            let newProductList = state.cartItems
            newProductList[productIndex].quantity += quantity
            dispatch({type:"GET_CART_ITEMS", payload: newProductList})
        }
        
        axios.post(`${BASE_URL}/addCart`,{
            user_id: state.user.id, 
            product_id: Number(productId),
            quantity: quantity,
            cart_id: state.user.cart_id
        })
        .then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
        setQuantity(0)
    }
    
    if(isLoading){
        return <div>Loading....</div>
    }
    
    return (
        <div>
            <div>
                <img src={`${BASE_IMG}/${productInfo.url}`} alt={productInfo.caption} />
                <h2>{productInfo.name}</h2>
                <div className="flex flex-cols justify-between">
                    <div>
                        <button className="w-10 h-8" onClick={decre}>-</button>
                        <input type="number" value={quantity} className="w-16 h-8" onChange={handleChange}/>
                        <button className="w-10 h-8" onClick={incre}>+</button>  
                    </div>
                    <button onClick={()=>{addCart()}}>Ajouter</button>
                </div>
                <p>{productInfo.price}</p>
                <p>{productInfo.material}</p>
                <p>{productInfo.description}</p>
                <p>{productInfo.height}</p>
                <p>{productInfo.width}</p>
            </div> 
            
        </div>  
        )
}

export default Product