import React from "react"
import "./index.css"
import Form from "./components/formFeedback/form.jsx"
import CommentsList from "./components/commentsList/list.jsx"
import SideText from "./components/sideText/sideText.jsx"


function App() {
  return (
    <div className="App d-flex">
      <SideText />
      <Form />
      <CommentsList />  
    </div>
  );
}

export default App;
