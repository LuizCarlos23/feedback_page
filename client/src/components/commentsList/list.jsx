import React, { useState, useEffect } from "react"
import requestList from "./requestList"
import "./list.css"
import iconeProfile from "../../assets/do-utilizador.png" 


const CommentsList = () => {
  const [list, setList] = useState([])
  const [lengthComments, setLengthComments] = useState(0)

  useEffect(() => {
    let comment = document.getElementsByClassName("comments")[0]
    requestComments()
  }, [])

  function getComments(list){
    return list.map(comment => {
      let id = comment[0],
          name = comment[1],
          commentText = comment[2]

      return (
        <div id={"comment-"+id} className="comment">
          <label>{name}</label>
          <img src={iconeProfile} />
          <p>{commentText}</p>
        </div> 
      )
    })
  }

  function requestComments(){
    let values = [lengthComments, lengthComments+3]
    requestList(values)
      .then(data => {
        return data.json()
      })
      .then(response => {
        if(response.error == "true"){return console.log(response.result) }
        let comments = []
        response.result.map(user => {
          comments.push(user)
        })
        setList(list.concat(comments))
      })
      .catch(err => {
        console.log(err);
      })
    setLengthComments(lengthComments+4)
  }

  return (
    <div className="comments-list">
      <h1>Comentários</h1>
      <div className="comments">
        {getComments(list)}
      </div>
      <div className="d-flex justify-content-center">
        <button className="btn btn-primary" onClick={requestComments}>Mais</button>
      </div>
    </div>
  ) 
}

export default CommentsList