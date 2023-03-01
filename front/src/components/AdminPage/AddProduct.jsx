import axios from "axios"
import { useState } from "react"
import {BASE_URL} from "../../tools/constante.js"
import {lengthLimit, checkVide} from "../../tools/inputCheck.js"
import { Navigate } from "react-router-dom"

const AddProduct = (props) => {
    
    const initialValue = {
        name: "", 
        description: "",
        collection_id: "",
        stock: "",
        material: "",
        price:""
        }
    const [productInfo, setProductInfo] = useState(initialValue)
    const [messageErr, setMessageErr] = useState("")
    const [isChangePage, setIsChangePage] = useState(false)
    
    console.log(productInfo)
    const handleSubmit = (e) => {
        e.preventDefault()
        
        const dataFile = new FormData();
        const files = {...e.target.img.files};
        console.log(files)

        if(!checkVide(productInfo)){
            setMessageErr("Champ obligatoire vide") 
            return
        }
        else if(files[0]===undefined){
            setMessageErr("Une photo obligatoire")
            return
        }
        console.log(files[0])
        dataFile.append('files', files[0], files[0].name)
        dataFile.append('name', productInfo.name)
        dataFile.append('description', productInfo.description)
        dataFile.append('collection_id', productInfo.collection_id)
        dataFile.append('stock', productInfo.stock)
        dataFile.append('material', productInfo.material)
        dataFile.append('price', productInfo.price)
        
        
        axios.post(`${BASE_URL}/admin/addArticle`, dataFile)
        .then(res=>{
            if(res.data.data.result.affectedRows > 0){
                setIsChangePage(true)
                return
            }
            if(res.data && res.data.data && res.data.data.response) alert(res.data.data.response)
            if(res.data.msg) alert(res.data.msg)
            setMessageErr(res.data.data.response)
        }).catch(err=>{
            console.log(err)
            return
        })
        setProductInfo(initialValue)
    }
    
    const handleChange = (e) => {
        setMessageErr("")
        // if(!lengthLimit(productInfo.name, 100)){
        //     setMessageErr("Title est limité à 100 caractères") 
        //     return
        // }else if(!lengthLimit(productInfo.description, 5000)){
        //     setMessageErr("Chaque content est limité à 5000 caractères") 
        //     return
        // }
        let newInfo = { ...productInfo, [e.target.name]: e.target.value }
        setProductInfo(newInfo)
    }

    return (
        <div className="container-admin">
            {isChangePage && <Navigate to="/admin/products" replace={true} />}
            <div className="admin-header">
                <div>
                    <h2>Créer un nouveau produit</h2>
                    <p>meilleur proportion de photo est 3:4, tous les dimensions sont en CM.</p>
                    {messageErr.length > 0 && <p  className="rounded py-2 px-4 bg-primary">{messageErr}</p>}
                </div>   
            </div>
            <form onSubmit={handleSubmit} encType="multipart/form-data"
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            >
                <label htmlFor="name">Nom du produit: </label>
                <input 
                    type="text" 
                    name="name" 
                    value={productInfo.name} 
                    placeholder="Nom du produit" 
                    onChange={(e)=>handleChange(e)} 
                />
                <label htmlFor="stock">Stockage: </label>
                <input 
                    type="text" 
                    name="stock" 
                    value={productInfo.stock} 
                    placeholder="Stockage" 
                    onChange={(e)=>handleChange(e)} 
                />
                <label htmlFor="material">Material: </label>
                <input 
                    type="text" 
                    name="material" 
                    value={productInfo.material} 
                    placeholder="Material"
                    onChange={(e)=>handleChange(e)} 
                />
                <label htmlFor="price">Prix: </label>
                <input 
                    type="text" 
                    name="price" 
                    value={productInfo.price} 
                    placeholder="Prix" 
                    onChange={(e)=>handleChange(e)} 
                />
                <label htmlFor="name">Nom du produit: </label>
                <input 
                    type="text" 
                    name="name" 
                    value={productInfo.name} 
                    placeholder="Nom du produit" 
                    onChange={(e)=>handleChange(e)} 
                />
                <label htmlFor="name">Nom du produit: </label>
                <input 
                    type="text" 
                    name="name" 
                    value={productInfo.name} 
                    placeholder="Nom du produit" 
                    onChange={(e)=>handleChange(e)} 
                />
                <label htmlFor="description">Description: </label>
                <textarea 
                    name="description" 
                    value={productInfo.description} 
                    placeholder="description" 
                    onChange={(e)=>handleChange(e)} 
                    rows="15" cols="33"
                />
                <label htmlFor="img">Produit image: </label>
                <div className="form-item">
                    <input type='file' name='img'
                         className="file:bg-gray-500 hover:file:bg-gray-700 py-2 px-4 file:rounded focus:outline-none focus:shadow-outline text-gray-100"
                    />
                </div>
                <button type="submit"
                    className="py-2 px-4 rounded bg-gray-900 hover:bg-primary my-2"
                >
                    Valider
                </button>
            </form>
        </div>
    );
}

export default AddProduct

