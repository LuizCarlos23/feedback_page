async function feedbackList(values = [1, 5]){
  let pool = require("../config/database")
  let queryText = `SELECT * FROM user_feedback where id >= $1 and id <= $2`
  
  return pool.query(queryText, values)
}

module.exports = feedbackList