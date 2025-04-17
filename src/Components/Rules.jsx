import React from 'react'

const Rules=()=>{
  return (
    <div className='bg-orange-100 p-2 flex flex-col gap-3 rounded-md'>
        <h1 className='font-bold text-xl'>How to play a Dice Game</h1>
        <div>
            <p>Select any number</p>
            <p>Click on Dice image</p>
            <p>After click on Dice if selected number is equal to dice number you will get same point as dice</p>
            <p>if you get wrong guess then 2 point will be deducted</p>
        </div>
    </div>
  )
}

export default Rules