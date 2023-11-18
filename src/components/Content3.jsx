import React from "react";

import { fadeAnimationOnView } from "../motion";
import { motion } from "framer-motion";

const Content3 = () => {
  return (
    <div className="w-full bg-black/90 py-14 ">
      <motion.div
        {...fadeAnimationOnView}
        className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-5 place-items-center p-3 sm:p-0"
      >
        <h1 className="text-white text-xl md:text-2xl ">
          Other Types of Male <br></br>
          <span className="text-[#0FACEF]">Sexual Dysfunction</span> Include:
        </h1>
        <ul>
          <li className="text-[#cfcfcf]">● Premature ejaculation</li>
          <li className="text-[#cfcfcf]">● Delayed or absent ejaculation</li>
          <li className="text-[#cfcfcf]">
            ● Low Libido or Lack of interest in sex
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Content3;
