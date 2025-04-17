import { useState } from 'react'
import './App.css'
import Start_Game from './Components/Start_Game'
import PlayGame from './Components/PlayGame';

function App() {
  const [isGameStarted,setIsGameStarted]=useState(false);
  const toggleGamePlay=()=>{
    setIsGameStarted((prev)=>!prev);
  }

  return (
    <>
     {isGameStarted? <PlayGame/> : <Start_Game toggle={toggleGamePlay} />}
    </>
  )
}

export default App
