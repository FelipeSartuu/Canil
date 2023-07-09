import express from "express"
import dotenv from "dotenv"
import mustache from "mustache-express"
import path from "path"
import mainRoutes from "./routes/index"

dotenv.config()

const server = express()

//Configurando template engine
server.set("view engine", "mustache")
server.set("views", path.join(__dirname, "views"))
server.engine("mustache", mustache())

//Configurando páginas estáticas (public)
server.use(express.static(path.join(__dirname, "../public")))

//Rotas
server.listen(process.env.PORT)
server.use(mainRoutes)

//Rota erro 404
server.use((req, res) => {
    res.render("pages/404")
})