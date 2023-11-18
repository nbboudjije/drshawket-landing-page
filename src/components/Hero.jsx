import React from "react";
import Image from "../assets/bg.png";

import { headTextAnimationOnView } from "../motion";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="w-full max-md:pt-5 bg-gradient-to-br bg-cyan-900 relative">
      <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center px-4 ">
        <div className="md:w-[50%] mb-5 max-lg:pl-7 max-xl:pl-7">
          <p className="text-lg md:text-sm text-black/90">
            Revitalize Your Intimate Experience
          </p>
          <motion.h1
            {...headTextAnimationOnView}
            className="text-4xl font-bold md:text-5xl lg:text-6xl  mt-2 text-white mb-5"
          >
            Insights and Solution for<br></br> Sexual Dysfunction
          </motion.h1>
          <p className="text-sm md:text-lg text-black/90">
            With Dr.Shawket Alkhayal
          </p>
          <button className="bg-[#0FACEF] duration-300 text-white py-3 px-5 rounded-xl mt-4 hover:bg-white hover:text-black animate-bounce">
            Book An Appointment
          </button>
        </div>
        <img
          src={Image}
          alt=""
          className="w-[80%] md:w-[50%] flex-1 object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
