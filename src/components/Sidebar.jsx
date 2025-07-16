import React, {useState} from 'react'
 import {assets} from '../assets/assets'

const Sidebar = () => {
  const[extended, setExtended] = useState(true);

  function handleOnclick(){
    setExtended(!extended);
  } 

  // function onMouseOver(){
  //   setExtended(true);
  // }

  // function onMouseLeave(){
  //   setExtended(false);
  // }


  function addStyle(){
    return "flex menu  m-1 p-3 rounded-full   bg-gray-200 cursor-pointer hover:bg-slate-100";
  }

  function style2(){
    return "m-1 p-3"
  }

  return (
    <div className=" inline-flex flex-col justify-between bg-slate-200 min-h-[100vh]" onClick={handleOnclick} >
        <div>
          <div className={extended ? addStyle() : style2()}>
            <img src={assets.menu_icon} alt="Menu icon " className='size-[25px] ' onClick={handleOnclick} />
            {/* {extended &&<p className='ml-4 font-bold'>Menu</p>} */}
          </div>

          <div className={extended ? addStyle() : style2()}>
              <img src={assets.plus_icon} alt="" className='size-[25px]' />
              {extended &&<p className='ml-4 font-bold'>New Chat</p>}
          </div>

          {extended &&  <div className='flex flex-col m-5'>
            <h5 className=' mt-[30px] mb-[20px]'>Recent</h5>
           <div className="flex align-start gap-2.5 p-2.5 pr-10 rounded-[50px] cursor-pointer hover:bg-slate-100">
            <img src={assets.message_icon} alt="message icon" className=' size-[25px]' />
            <p>What is react...</p>
           </div>
        </div>}
         
        
        </div>

      

        <div className="flex flex-col">
          <div className={extended ? addStyle() : style2()}>
      <img src={assets.setting_icon} alt="" className='size-[25px]'  />
               {extended &&<p className='ml-4 font-bold'>Settings</p>}
          </div>

            <div className={extended ? addStyle() : style2()}>
      <img src={assets.history_icon} alt="" className='size-[25px]'  />
               {extended &&<p className='ml-4 font-bold'>Activity</p>}
          </div>
      
      <div className={extended ? addStyle() : style2()}>
        <img src={assets.question_icon} alt="" className='size-[25px]' />
            {extended &&<p className='ml-4 font-bold'>Help</p>}
      </div>
            
        </div>
          
        </div>
  )
}

export default Sidebar