import React from 'react'

const Total_Score=({score})=>{
  return (
    <div className=' w-fit flex  flex-col justify-center items-center p-2'>
        <h1 className='text-7xl font-semibold'>{score}</h1>
        <p className='font-semibold text-2xl'>Total Score</p>
    </div>
  )
}

export default Total_Score