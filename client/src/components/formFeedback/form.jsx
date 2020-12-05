import React from "react"
import "./form.css"
import formValidator from "./formValidator"
const IP = "192.168.0.106"

const Form = () => {
  async function handleSubmit(){
    if (formValidator()){
      alert("Enviando")
      let username = document.getElementById("username").value,
        email = document.getElementById("inputEmail").value,
        feedback_text = document.getElementById("feedbackText").value
      let values = {username: username, email: email, feedback_text: feedback_text}
      
      await fetch(`http://${IP}:9937/insert/feedback`, {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-Type": "application/json" }
      }).then(result => {
        return result.json();
      }).then(data => {
        console.log(data); 
      }).catch(err => {
        console.log(err);
      })
      window.location.reload(true)
    }
  }

  return (
      <div className="feedback-form">
      <h1>Formulário</h1>
      <form >
        <div className="form-group">
          <input type="text" id="username" className="form-control" placeholder="Nome" minLength="10" maxLength="100" required />
          <small id="usernameHelp" className="invalidMessage">O nome precisa ter no minimo 10 caracteres</small> 
        </div>
        <div className="form-group">
          <input type="email" id="inputEmail" className="form-control" placeholder="Email" required />
          <small id="emailHelp" className="invalidMessage">Email inválido!</small>
        </div>  
        
        <div className="form-group">
          <textarea id="feedbackText" className="form-control" placeholder="Digite sua opnião sobre o site..." minLength="20" maxLength="300" cols="30" rows="5" required />
          <small id="textAreaHelp" className="invalidMessage">É preciso no minomo 20 caracteres!</small>
        </div>
        <div className="d-flex justify-content-center">
          <input type="buttom" onClick={handleSubmit} className="btn btn-primary" value="Enviar" />
        </div>
      </form>
      </div>
    
  )
}

export default Form