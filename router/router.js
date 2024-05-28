import addArticlePostController from "../controller/addArticle.js"
import addCartPostController from "../controller/addCart.js"
import addCollectionPostController from "../controller/addCollection.js"
import addProductPostController from "../controller/addProduct.js"
import addUserPostController from "../controller/addUser.js"
import allArticleGetController from "../controller/allArticle.js"
import allCollectionGetController from "../controller/allCollection.js"
import allProductGetController from "../controller/allProduct.js"
import allUserGetController from "../controller/allUser.js"
import checkToken from "../controller/checkToken.js"
import deleteArticleByIdPostController from "../controller/deleteArticle.js"
import deleteCollectionByIdPostController from "../controller/deleteCollection.js"
import deleteProductCartPostController from "../controller/deleteProductCart.js"
import deleteProductPostController from "../controller/deleteProduct.js"
import deleteUserPostController from "../controller/deleteUser.js"
import express from "express"
import getArticleByIdPostController from "../controller/getArticleById.js"
import getCollectionByIdPostController from "../controller/getCollectionById.js"
import getProductByIdPostController from "../controller/getProductById.js"
import getUserByIdPostController from "../controller/getUserById.js"
import homeGetController from "../controller/homeGet.js"
import loginPostController from "../controller/login.js"
import middleware from "../controller/middleware.js"
import middlewareUpload from "../controller/middlewareUpload.js"
import updateArticlePhotoPostController from "../controller/updateArticlePhoto.js"
import updateArticlePostController from "../controller/updateArticle.js"
import updateCollectionPostController from "../controller/updateCollection.js"
import updatePasswordPostController from "../controller/updatePasswordById.js"
import updateProductPhotoPostController from "../controller/updateProductPhoto.js"
import updateProductPostController from "../controller/updateProduct.js"
import updateProfilPostController from "../controller/updateProfil.js"
import updateRolePostController from "../controller/updateRole.js"

const router = express.Router()

const routesGET = [
    {route:"/", controller: homeGetController},
    {route:"/users", controller: allUserGetController},
    {route:"/users/:id", controller: getUserByIdPostController},
    {route:"/relogged", controller: checkToken},
    {route:"/articles", controller: allArticleGetController},
    {route:"/articles/:id", controller: getArticleByIdPostController},
    {route:"/collections", controller: allCollectionGetController},
    {route:"/collections/:id", controller: getCollectionByIdPostController},
    {route:"/products", controller: allProductGetController},
    {route:"/products/:id", controller: getProductByIdPostController},
]

const routesPOST = [
    {route:"/users", controller: addUserPostController},
    {route:"/login", controller: loginPostController},
    {route:"/collections", controller: addCollectionPostController},
    {route:"/cart", controller: addCartPostController},
]

const routesPATCH = [
    {route:"/users", controller: updateProfilPostController},
    {route:"/role", controller: updateRolePostController},
    {route:"/users/:id/password", controller: updatePasswordPostController},
    {route:"/articles", controller: updateArticlePostController},
    {route:"/collections", controller: updateCollectionPostController},
    {route:"/products", controller: updateProductPostController},
    {route:"/cart", controller: deleteProductCartPostController},
]

const routesDELETE = [
    {route:"/users/:id", controller: deleteUserPostController},
    {route:"/articles/:id", controller: deleteArticleByIdPostController},
    {route:"/collections/:id", controller: deleteCollectionByIdPostController},
    {route:"/products/:id", controller: deleteProductPostController},
]

const routesUpload = [
    {route:"/articles", controller: addArticlePostController},
    {route:"/products", controller: addProductPostController},
]

const routesPATCHUpload = [
    {route:"/articles/photo/", controller: updateArticlePhotoPostController},
    {route:"/products/photo/", controller: updateProductPhotoPostController},
]

routesGET.map((item) =>{
        router.get(item.route, middleware, item.controller);
})

routesPOST.map((item) =>{
        router.post(item.route, middleware, item.controller);
})

routesPATCH.map((item) =>{
    router.patch(item.route, middleware, item.controller);
})

routesDELETE.map((item) =>{
    router.delete(item.route, middleware, item.controller);
})

routesUpload.map((item) =>{
        router.post(item.route, middleware, middlewareUpload, item.controller);
})

routesPATCHUpload.map((item) =>{
    router.patch(item.route, middleware, middlewareUpload, item.controller);
})

export default router