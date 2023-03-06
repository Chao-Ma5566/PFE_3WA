import {useEffect,useContext,useState} from 'react'
import axios from 'axios'
import { StoreContext } from "../tools/context.js"
import {BASE_URL, BASE_IMG} from "../tools/constante.js"
import { NavLink } from "react-router-dom"
import ProductCard from "./ProductCard.jsx"

const Shop = () =>{
    const [productList, setProductList] = useState([])
    const [state, dispatch] = useContext(StoreContext);
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
        if(state.products.length > 0){
            setProductList(state.products)
            setIsLoading(false)
        }else{
            setIsLoading(true)
            axios.get(`${BASE_URL}/relogged`)
                .then(function(res) {
                    setProductList(res.data.products);
                    dispatch({type:"LOGIN", payload:res.data.result})
                    dispatch({type:"GET_CART_ITEMS", payload:res.data.cart})
                    dispatch({type:"PRODUCTLIST", payload:res.data.products})    
                })
                .catch(function(error) {
                    console.log(error);
                })
                .then(
                setIsLoading(false))
        }
    }, [])
    
    if(isLoading){
        return <div>Loading...</div>
    }
    return (
        <div className="w-full h-full grid grid-cols-4 gap-2 m-2 overscroll-auto">
            {productList.map((product,i)=>{
               return <ProductCard 
                    data={product}
                    key={i}
                    index={i}
                    />
            })}
        </div>    
    )
}

export default Shop