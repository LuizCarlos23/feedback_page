async function insertFeedback(values){
  let pool = require("../config/database")
  let queryText = "INSERT INTO user_feedback(name, email, feedback_text) VALUES ($1, $2, $3) RETURNING *"

  return pool.query(queryText, values)
}

module.exports = insertFeedback