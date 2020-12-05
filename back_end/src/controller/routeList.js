function routeList(req, res){
  let values = req.body,
      feedbackList = require("../databaseComunication/feedbackList")

  feedbackList(values)
    .then(result => {
      let list = []
      result.rows.map(user => {
        list.push([user.id, user.name, user.feedback_text])
      })
      console.log(list)
      res.send({"error": "false", "result": list}).status(200)
    })
    .catch(err => {
      console.log("Erro ao listar!\n\n", err)
      res.send({"error": "true", "result": "Error ao listar os comentários"})
    })
}

module.exports = routeList
