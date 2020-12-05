function configApp(express){
  const routes = require("../routes")
  const cors = require("cors")

  const app = express()

  app.use(cors())

  app.use("/", routes)

  // Configuração para o express reconhcer objetos json
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))

  return app
}

module.exports = configApp