import {BASE_URL, BASE_IMG} from "../tools/constante.js"
import {useEffect,useContext,useState} from 'react'
import { NavLink } from "react-router-dom"
import { StoreContext } from "../tools/context.js"

const ProductCard = ({data, setProductList, productList, index})=>{
    const [quantity, setQuantity] = useState(0)
    const  [state, dispatch] = useContext(StoreContext);
    
    const handleChange = (e) =>{
        setQuantity(e.target.value)
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
        let newProductList = productList
        if(newProductList[index].quantity){
            newProductList[index].quantity += quantity
        }else{
            newProductList[index].quantity = quantity
        }
        setProductList(newProductList)
        console.log(data)
        setQuantity(0)
    }
    
    return (
        <div className="rounded-lg">
            <div>
                <NavLink className="text-center" to={`/product/${data.id}`}>
                    <img className="object-contain w-full h-full" 
                        src={`${BASE_IMG}/${data.url}`} alt={data.caption} />
                </NavLink>
            </div>
            <div className="bg-gray-100 p-2">
                <div>
                    {data.name}
                </div>
                <div>
                    <div className="flex flex-cols justify-around">
                        <button onClick={decre}>-</button>
                        <input type="number" value={quantity} className="w-10 h-8" onChange={handleChange}/>
                        <button onClick={incre}>+</button>
                        <button onClick={()=>{addCart()}}>Ajouter</button>
                    </div>
                    <div>
                        <h5>Prix: {data.price}€</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard