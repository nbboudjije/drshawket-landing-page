import React from "react";
import Image from "../assets/sexual-dysfunction-1.jpg";
import { headTextAnimationOnView } from "../motion";
import { motion } from "framer-motion";

const Content8 = () => {
  return (
    <div className="w-full bg-white py-14">
      <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-6 place-items-center">
        <img src={Image} alt="" className="object-cover w-[80vw]  " />
        <div className="flex flex-col items-center justify-center max-lg:pr-3 max-xl:pr-7">
          <motion.h1
            {...headTextAnimationOnView}
            className="text-[#0FACEF] text-4xl md:text-5xl max-md:text-center "
          >
            Ejaculation Disorders
          </motion.h1>
          <p className="text-gray max-md:p-4 my-5 text-black max-md:text-center ">
            Premature ejaculation occurs when a man ejaculates before or
            immediately after penetration. Causes include psychological issues
            such as performance anxiety, stressors, sexual inhibitions or
            physical issues such as nerve or spinal cord damage, or some
            medications.
            <br />
            Inhibited ejaculation, on the other hand, is when you can’t
            ejaculate. Some men, particularly those with diabetic neuropathy,
            experience 'retrograde ejaculation', which means that when they
            climax, ejaculation enters the bladder instead of exiting through
            the penis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content8;
