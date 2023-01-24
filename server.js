import express from "express"
import cors from "cors"
import router from "./router/router.js"
import bodyParser from "body-parser"


const app = express()

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(express.static("public"));

app.use("/", router)

app.listen(3001, () => {
    console.log("le serveur est demarrer")
})
