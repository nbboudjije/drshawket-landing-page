import React from "react";
import Logo from "../assets/logo.png";
import { AiOutlineWhatsApp } from "react-icons/ai";

function Navbar() {
  return (
    <div className="w-full py-2 bg-gradient-to-br from-cyan-900 to-slate-800 relative">
      <div className="max-w-[1100px] mx-auto max-lg:px-7 max-xl:px-7 flex justify-center md:justify-between items-center">
        <img src={Logo} alt="" className="w-[130px] md:pl-3" />
        <button className="bg-[#0FACEF] duration-300 hidden md:flex justify-center items-center gap-2 text-white py-3 px-5 rounded-xl hover:bg-white hover:text-black ">
          <AiOutlineWhatsApp />
          +971 56 321 8910
        </button>
      </div>
    </div>
  );
}

export default Navbar;
