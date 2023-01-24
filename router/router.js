import express from "express"
import homeGetController from "../controller/homeGet.js"
const router = express.Router()

router.get("/", homeGetController)

export default router