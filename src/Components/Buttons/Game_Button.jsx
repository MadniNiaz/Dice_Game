import React from 'react'

const Game_Button=({text,onClick,reset,Show_Rules})=>{
  return (
    <button 
    onClick={onClick}

    className={`border cursor-pointer border-gray-500  w-56
     ${ text ?  "mr-1 rounded-md bg-black text-white p-2 border-1  transition-all duration-200 ease-in-out hover:bg-gray-200 hover:text-black " :"" }
     ${ reset ?  " w-64 mr-1 rounded-md bg-gray-200 text-black p-2 border-1  transition-all duration-200 ease-in-out hover:bg-gray-200 hover:text-black active:bg-red-800 active:text-white active:font-semibold " :"" }
     ${ Show_Rules ?  " w-64 mr-1 rounded-md bg-black text-white p-2 border-1  transition-all duration-200 ease-in-out hover:bg-gray-200 hover:text-black active:font-semibold " :"" }`}>
        {text}
        {reset}
        {Show_Rules}
    </button>
  )
}

export default Game_Button