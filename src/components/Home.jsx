import React from 'react'
import {assets} from '../assets/assets'
import Header from './Header'
import Input from './Input'


const Main = () => {
  return (
    <div className='flex-1 min-h-screen relative'>
    <Header />

   
   <div className="max-w-[900px] m-auto ">
    <div className="m-[50px,0] text-6xl text-[#c4c7c5] font-medium p-2.5">
      <p><span className='bg-gradient-to-r from-[#4b90ff] to-[#ff5546] bg-clip-text text-transparent'>Hey, Shivam</span></p>
      <p>How can I help you today?</p>
    </div>
   </div>
     
      
     
     <Input/>
    </div>
  )
}

export default Main