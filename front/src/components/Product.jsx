import axios from "axios"
import {useState, useEffect, useContext} from "react"
import { useParams } from "react-router-dom";
import {BASE_URL, BASE_IMG} from "../tools/constante.js"
import { NavLink, Navigate } from "react-router-dom"
import {StoreContext} from "../tools/context.js"

const Product = (props) => {
    const { productId } = useParams();
    const [state, dispatch] = useContext(StoreContext);
    const [productInfo, setProductInfo] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [collectionList, setCollectionList] = useState([])
    
    useEffect(() => {
        setIsLoading(true)
        axios.post(`${BASE_URL}/getProductById`, { id: productId })
            .catch(err => console.log(err))
            .then(res => {
                console.log(res)
                setProductInfo(res.data.data.result[0])
                axios.get(`${BASE_URL}/admin/collection`)
                    .then(function(response) {
                        console.log(response.data.data)
                        setCollectionList(response.data.data.result);
                    })
                    .catch(function(error) {
                        console.log(error);
                    });
        })
            .then(res => setIsLoading(false))
    }, [productId])
    
    console.log(productInfo)
    if(isLoading){
        return <div>Loading....</div>
    }
    
    return (
        <div>
            <div>
            <img src={`${BASE_IMG}/${productInfo.url}`} alt={productInfo.caption} />
            <h2>{productInfo.name}</h2>
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