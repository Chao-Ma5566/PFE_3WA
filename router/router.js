import express from "express"
import homeGetController from "../controller/homeGet.js"
import middleware from "../controller/middleware.js"
import addUserPostController from "../controller/addUser.js"
import loginPostController from "../controller/login.js"
import addCollectionPostController from "../controller/addCollection.js"

const router = express.Router()

router.get("/", homeGetController)

const routesGET = [
    {route:"/", controller: homeGetController}
]
const routesPOST = [
    {route:"/addUser", controller: addUserPostController},
    {route:"/login", controller: loginPostController},
    {route:"/addCollection", controller: addCollectionPostController},
]

routesGET.map((item) =>{
        router.get(item.route, middleware, item.controller);
})

routesPOST.map((item) =>{
        router.post(item.route, middleware, item.controller);
})


export default router