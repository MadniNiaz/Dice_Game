import React, { use } from 'react'
import Total_Score from './Total_Score'
import Number_selector from './Number_selector'
import Role_Dice from './Role_Dice'
import { useState } from 'react'
import Game_Button from './Buttons/Game_Button'
import Rules from './Rules'

const PlayGame=({reset,Show_Rules}) =>{
  const [score, setScore] = useState(0)
  const [selectedNumber, setSelectedNumber] = useState()
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("")
  const [showRules,setShowRules]=useState(false)



  const getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const role_Dice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number")
      return;
    }
    const randomNumber = getRndInteger(1, 7);
    setCurrentDice((prev) => randomNumber);



    if (selectedNumber == randomNumber) {
      setScore((prev) => prev + randomNumber)
    } else {
      setScore((prev) => prev - 2)
    }

    setSelectedNumber(undefined)

  }

  const resetScore=()=>{
    setScore(0)
  }


  return (
    <main>
      <div className=' flex justify-between items-center mt-10 mx-11 p-2'>
        <Total_Score score={score} />
        <Number_selector
          setError={setError}
          error={error}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <Role_Dice
        currentDice={currentDice}
        role_Dice={role_Dice}
      />
      <div className='flex flex-col justify-center items-center gap-2 mt-2'>
        <Game_Button onClick={resetScore} reset="Reset" />
        <Game_Button onClick={()=>setShowRules((prev)=>!prev)} Show_Rules="Show Rules"/>
      </div>

      <div className='flex justify-center items-center h-[30vh]'>
        {showRules &&  <Rules/>}
        
      </div>
    </main>
  )
}

export default PlayGame