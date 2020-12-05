function formValidator(){
  let email = document.getElementById("inputEmail"),
      username = document.getElementById("username"),
      textArea = document.getElementById("feedbackText"),
      error = undefined
  if(!emailValidator(email)){
    email.focus()
    error = true
  }
  if(!usernameValidator(username)) {
    username.focus()
    error = true
  }
  if(!textAreaValidator(textArea)){
    textArea.focus()
    error = true
  }

  if(error){
    return false
  }
  return true
}

function emailValidator(email){
  let emailValue = email.value
  if (emailValue == "" || emailValue == null) return styleChange(email)
  if (emailValue.indexOf("@") == -1 || emailValue.indexOf(".") == -1) return styleChange(email)

  return true
}

function usernameValidator(username){
  let usernameValue = username.value
  if ( usernameValue.length < 10 || usernameValue.length > 100  ) return styleChange(username)

  return true
}

function textAreaValidator(textArea){
  let text = textArea.value
  if ( text.length < 10 || text.length > 100  ) return styleChange(textArea)
  return true
}

function styleChange(element){
  let helpText 
  switch (element.id){
    case "inputEmail":
      helpText = document.getElementById("emailHelp")
      break
    
    case "username":
      helpText = document.getElementById("usernameHelp")
      break

    case "feedbackText":
      helpText = document.getElementById("textAreaHelp")
      break
      
    default:
      return false
  }
  
  helpText.style.visibility = "visible"
  
  return false
}


module.exports = formValidator