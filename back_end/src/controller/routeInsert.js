function routeInsert(req, res){
  const insertFeedback = require("../databaseComunication/insertFeedback")
  let values = req.body
  if (!values || values == undefined || values == null) return res.send({"error": "true", "result": "Error ao cadastrar o feedback!"})
  let username = req.body.username,
      email = req.body.email,
      feedback_text = req.body.feedback_text
  
  values = [username, email, feedback_text]
  insertFeedback(values)
    .then( result => {
      res.send({"error": "false", "result": list}).status(200)
    })
    .catch(err => {
      console.log("Erro ao listar!\n\n", err)
      res.send({"error": "true", "result": "Error ao cadastrar o feedback!"})
    })
}

module.exports = routeInsert
