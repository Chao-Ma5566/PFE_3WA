import bodyParser from "body-parser"
import cors from "cors"
import express from "express"
import router from "./router/router.js"

const app = express()

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(express.static("public"));

app.use("/", router)

app.listen(3001, () => {
    console.log("le serveur est demarrer")
})
