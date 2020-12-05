const express = require("express"),
      routes = express.Router(),
      bodyParser = require("body-parser")

const routeList = require("./controller/routeList")
const routeInsert = require("./controller/routeInsert")

// Configuração para o body-parser
routes.use(express.urlencoded({ extended: true }))
routes.use(bodyParser.json())

routes.get("/", (req, res) => {
  console.log("Passou alguem!")
  return res.send({"msg":"Hello World!"})
})

// Rota para listar os comentários dos usuarios
routes.post("/list/feedback", routeList)

routes.post("/insert/feedback", routeInsert)

module.exports = routes