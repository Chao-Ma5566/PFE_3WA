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
import deleteArticleByIdPostController from "../controller/deleteArticle.js"
import getArticleByIdPostController from "../controller/getArticleById.js"
import checkToken from "../controller/checkToken.js"

const router = express.Router()

router.get("/", homeGetController)

const routesGET = [
    {route:"/", controller: homeGetController},
    {route:"/admin/users", controller: allUserGetController},
    {route:"/relogged", controller: checkToken},
    {route:"/admin/articles", controller: allArticleGetController}
]
const routesPOST = [
    {route:"/addUser", controller: addUserPostController},
    {route:"/login", controller: loginPostController},
    {route:"/addCollection", controller: addCollectionPostController},
    {route:"/admin/deleteUser", controller: deleteUserPostController},
    {route:"/getUserById", controller: getUserByIdPostController},
    {route:"/updateProfil", controller: updateProfilPostController},
    {route:"/admin/updateRole", controller: updateRolePostController},
    {route:"/updatePassword", controller: updatePasswordPostController},
    {route:"/getArticleById", controller: getArticleByIdPostController},
    {route:"/admin/deleteArticle", controller: deleteArticleByIdPostController},
]
const routesUpload = [
    {route:"/admin/addArticle", controller: addArticlePostController},
    {route:"/admin/Article", controller: addArticlePostController},
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