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
        setIsLoading(true)
        if(state.products.length > 0){
            setProductList(state.products)
            setIsLoading(false)
        }else{
        axios.get(`${BASE_URL}/products`)
            .then(function(response) {
                setProductList(response.data.data.result);
                dispatch({type:"PRODUCTLIST", payload: response.data.data.result})     
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
                    setProductList={setProductList} 
                    productList={productList} 
                    key={i}
                    index={i}
                    />
            })}
        </div>    
    )
}

export default Shop