import React, { useState } from 'react'

const Number_selector=({setError,selectedNumber,setSelectedNumber,error})=>{

    const arryNumbers=[1,2,3,4,5,6];

    const numberSelectorHandler=(value)=>{
        setSelectedNumber(value);
        setError("");
        
        
    }
   


  return (
   <div className=' p-2 flex flex-col '>
        <p className='p-3 text-xl text-red-600 font-semibold'>{error}</p>
     <div className='flex'>
        {
            arryNumbers.map((value,i)=>(
                <div className={`border border-black w-[72px] h-[72px] mx-3 font-semibold flex  
                justify-center items-center text-2xl ${value==selectedNumber ? "bg-black text-white" :"white"} `} key={i}
                onClick={()=>numberSelectorHandler(value)} 
                 >
                    {value}
                    <p></p>
                </div>
            ))
        }
    </div>
    <p className='font-semibold text-xl flex justify-end items-center mt-7 mx-3'>Select Number</p>
   </div>
  )
}

export default Number_selector