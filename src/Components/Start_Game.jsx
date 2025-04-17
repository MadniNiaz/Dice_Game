import React from 'react'
import Game_Button from './Buttons/Game_Button'


const Start_Game=({toggle})=>{
  return (
    <div className=' min-h-screen flex items-center justify-center'>
        <div className=' p-1 flex '>
        <div className='mr-2'>{/*for dice picture */}
            <img src='/images/Dices.png'  className=' p-2'/>
        </div>

        <div className=' flex flex-col justify-center items-end w-fit'>{/*for headings and buttons */}
        <hi className="text-7xl font-bold p-1 mb-4">
          DICE GAME
        </hi>

        <Game_Button onClick={toggle} text="Play Now"/> {/*play button */}
        </div>
        </div>
    </div>
  )
}

export default Start_Game