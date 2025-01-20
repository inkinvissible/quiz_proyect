import { useState } from 'react'
import Welcome from "./components/Welcome.jsx";
import Quiz from "./components/Quiz.jsx";

import './App.css'

function App() {
const [navigator, setNavigator] = useState("Welcome")

  if(navigator === "Welcome"){
    return <Welcome setNavigator={setNavigator}/>
  }
  if (navigator === "Quiz"){
    return <Quiz />
  }

}

export default App
