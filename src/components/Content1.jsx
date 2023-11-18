import React from "react";
import Image from "../assets/sexual-dysfunction-1.jpg";

import { slideAnimationScroll } from "../motion";
import { motion } from "framer-motion";

const Content1 = () => {
  return (
    <div className="w-full bg-[#25262b] py-14">
      <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-6 place-items-center">
        <div className="flex flex-col items-center justify-center p-3 sm:pr-7 md:pr-3">
          <motion.h1
            {...slideAnimationScroll("left")}
            className="text-white max-xs:p-0 text-4xl md:text-5xl max-md:text-center max-sm:p-2 max-md:p-1"
          >
            What is <span className="text-[#0FACEF]">Sexual dysfunction ?</span>
          </motion.h1>
          <p className="text-gray my-5 text-[#cfcfcf] max-md:text-center max-md:p-4">
            Sexual dysfunction is a broad term that can be defined as a problem
            that prevents you from enjoying or wanting sexual activity. The
            likelihood of having sexual dysfunction increases with age. A common
            cause is stress, but it could also be the result of psychological
            issues or sexual trauma, and medical conditions such as diabetes or
            heart disease, or it could be exacerbated by drug and alcohol use
            and some medications.
          </p>
        </div>
        <div className="">
          <img src={Image} alt="" className="object-cover w-[80vw]" />
        </div>
      </div>
    </div>
  );
};

export default Content1;
