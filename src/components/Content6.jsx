import React from "react";
import Image from "../assets/sexual-dysfunction-1.jpg";

import { fadeAnimationOnView } from "../motion";
import { motion } from "framer-motion";

const Content6 = () => {
  return (
    <div className="w-full bg-[#25262b] py-14">
      <motion.div
        {...fadeAnimationOnView}
        className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-6 place-items-center"
      >
        <div className="flex flex-col items-center justify-center max-lg:pl-4 max-xl:pl-7">
          <h1 className="text-white md:text-3xl text-4xl max-md:text-center max-md:p-2">
            What Should You Do If You Suffer From
            <span className="text-[#0FACEF]"> Erectile Weakness?</span>
          </h1>
          <p className="text-gray my-5 max-md:p-4 text-[#cfcfcf] max-md:text-center ">
            There are a number of Erectile Dysfunction treatments available. The
            type of treatment generally depends on the underlying cause of ED,
            which can be determined by the doctor through clinical examination
            and special blood tests.
            <br />A Colour penile duplex Doppler study may also be required to
            check the blood flow in the penis and determine the exact cause of
            Erectile dysfunction. Penile doppler could also determine the best
            option of treatment for your condition.
          </p>
        </div>
        <img src={Image} alt="" className="object-cover w-[80vw]  " />
      </motion.div>
    </div>
  );
};

export default Content6;
