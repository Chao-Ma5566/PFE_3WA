import express from "express"
import homeGetController from "../controller/homeGet.js"
import middleware from "../controller/middleware.js"
import middlewareUpload from "../controller/middlewareUpload.js"
import addUserPostController from "../controller/addUser.js"
import loginPostController from "../controller/login.js"
import addCollectionPostController from "../controller/addCollection.js"
import allUserGetController from "../controller/allUser.js"
import deleteUserPostController from "../controller/deleteUser.js"
import getUserByIdPostController from "../controller/getUserById.js"
import updateProfilPostController from "../controller/updateProfil.js"
import updateRolePostController from "../controller/updateRole.js"
import updatePasswordPostController from "../controller/updatePasswordById.js"
import addArticlePostController from "../controller/addArticle.js"
import allArticleGetController from "../controller/allArticle.js"
import updateArticlePostController from "../controller/updateArticle.js"
import updateArticlePhotoPostController from "../controller/updateArticlePhoto.js"
import deleteArticleByIdPostController from "../controller/deleteArticle.js"
import getArticleByIdPostController from "../controller/getArticleById.js"
import addProductPostController from "../controller/addProduct.js"
import getProductByIdPostController from "../controller/getProductById.js"
import updateProductPhotoPostController from "../controller/updateProductPhoto.js"
import updateProductPostController from "../controller/updateProduct.js"
import deleteProductPostController from "../controller/deleteProduct.js"
import allCollectionGetController from "../controller/allCollection.js"
import allProductGetController from "../controller/allProduct.js"
import updateCollectionPostController from "../controller/updateCollection.js"
import getCollectionByIdPostController from "../controller/getCollectionById.js"
import deleteCollectionByIdPostController from "../controller/deleteCollection.js"
import addCartPostController from "../controller/addCart.js"
import deleteProductCartPostController from "../controller/deleteProductCart.js"
import checkToken from "../controller/checkToken.js"

const router = express.Router()

const routesGET = [
    {route:"/", controller: homeGetController},
    {route:"/admin/users", controller: allUserGetController},
    {route:"/relogged", controller: checkToken},
    {route:"/admin/articles", controller: allArticleGetController},
    {route:"/admin/collection", controller: allCollectionGetController},
    {route:"/products", controller: allProductGetController},
]
const routesPOST = [
    {route:"/addUser", controller: addUserPostController},
    {route:"/login", controller: loginPostController},
    {route:"/admin/addCollection", controller: addCollectionPostController},
    {route:"/admin/deleteUser", controller: deleteUserPostController},
    {route:"/getUserById", controller: getUserByIdPostController},
    {route:"/updateProfil", controller: updateProfilPostController},
    {route:"/admin/updateRole", controller: updateRolePostController},
    {route:"/updatePassword", controller: updatePasswordPostController},
    {route:"/getArticleById", controller: getArticleByIdPostController},
    {route:"/admin/deleteArticle", controller: deleteArticleByIdPostController},
    {route:"/admin/updateArticle", controller: updateArticlePostController},
    {route:"/admin/updateCollection", controller: updateCollectionPostController},
    {route:"/admin/getCollectionById", controller: getCollectionByIdPostController},
    {route:"/admin/deleteCollection", controller: deleteCollectionByIdPostController},
    {route:"/admin/updateProduct", controller: updateProductPostController},
    {route:"/admin/deleteProduct", controller: deleteProductPostController},
    {route:"/getProductById", controller: getProductByIdPostController},
    {route:"/addCart", controller: addCartPostController},
    {route:"/deleteProductCart", controller: deleteProductCartPostController},
]
const routesUpload = [
    {route:"/admin/addArticle", controller: addArticlePostController},
    {route:"/admin/updateArticlePhoto", controller: updateArticlePhotoPostController},
    {route:"/admin/addProduct", controller: addProductPostController},
    {route:"/admin/updateProductPhoto", controller: updateProductPhotoPostController},
    
]

routesGET.map((item) =>{
        router.get(item.route, middleware, item.controller);
})

routesPOST.map((item) =>{
        router.post(item.route, middleware, item.controller);
})

routesUpload.map((item) =>{
        router.post(item.route, middleware, middlewareUpload, item.controller);
})

export default router