import express from "express"
import homeGetController from "../controller/homeGet.js"
import middleware from "../controller/middleware.js"
import addUserPostController from "../controller/addUser.js"
const router = express.Router()

router.get("/", homeGetController)

const routesGET = [
    {route:"/", controller: homeGetController}
]
const routesPOST = [
    {route:"/addUser", controller: addUserPostController}
]

routesGET.map((item) =>{
        router.get(item.route, middleware, item.controller);
})

routesPOST.map((item) =>{
        router.post(item.route, middleware, item.controller);
})


export default router