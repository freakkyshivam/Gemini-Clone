import React, {useState} from 'react'
import {assets} from '../assets/assets'





const Input = () => {
    const[extended, setExtended] = useState(false);

function handleOnclick(){
  setExtended(!extended);
} 

 

  return (

    <div className="absolute bottom-0 left-0 right-0 w-full max-w-[900px] p-[0px,20px] m-auto">
        <div className="flex items-center justify-between gap-2.5 bg-[#f0f4f9] p-[10px, 20px] rounded-[50px]">
            <input type="text" placeholder="Ask Gemini" className='flex-1 bg-transparent outline-none p-2 text-xl' />
            <div className='flex items-center gap-3.5'>
                <img src={assets.gallery_icon}alt='gallery_icon' className='size-[25px] cursor:pointer'/>
                <img src={assets.mic_icon}alt='gallery_icon' className='size-[25px] cursor:pointer' />
                <img src={assets.send_icon}alt='gallery_icon' className='size-[25px] cursor:pointer'/>
            </div>
           
        </div>
         <p className='text-[13px] m-3.5 text-center font-light'>Gemini can make mistakes, so double-check it</p>
    </div>
    
  )
}

export default Input