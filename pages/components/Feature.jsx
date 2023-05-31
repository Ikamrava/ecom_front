import React, { useState } from 'react'
import { BsFillBasket3Fill } from 'react-icons/bs';


function Feature({data}) {
 
    console.log(data)


    function addHandler(){
        
    }



  return (
    <div className='  bg-slate-900 py-5 px-8 text-white flex flex-col justify-between mx-2 md:flex-row mt-4 md:mt-0 items-center my-0 ' >
           <div>
            <h1 className=' text-2xl font-bold'>{data.name}</h1>
            <p className=' max-w-md'>{data.description}</p>
            <div className=' flex gap-4 mt-3'>
            <button 
            className=' bg-slate-900 text-white px-2 shadow-sm shadow-white inline-block text-lg transition-transform hover:scale-105 border-2 border-white' >Read More</button>
            <div className=' flex relative'>
            <button className=' font-bold bg-yellow-400 text-black pl-8 pr-2 py-1 shadow-sm shadow-white text-lg transition-transform hover:scale-105'
             onClick={addHandler}>Add to Cart</button>
            <div className=' absolute top-2 left-2'>
                <BsFillBasket3Fill size={18} color='black'></BsFillBasket3Fill>
            </div>
            
            </div>
            
            </div>
        </div>
        <div className=' shadow-lg '>
        <img src={data.images[0]} alt="Main Image" width={350} height={150}  className=' rounded-lg' />
        
        </div>  
        
         
      </div>
    )
  
}

export default Feature