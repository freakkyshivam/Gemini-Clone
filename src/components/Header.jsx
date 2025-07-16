import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-5 text-xl">
     <p>Gemini</p>
      <img src={assets.user_icon} alt="" className=' w-[30px] h-[30px] rounded-full' />
    </header>
  );
};

export default Header;
