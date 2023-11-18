import React from "react";
import Image from "../assets/ed1.jpg";

import { slideAnimationScroll } from "../motion";
import { motion } from "framer-motion";

const Content4 = () => {
  return (
    <div className="w-full bg-white py-14">
      <motion.div
        {...slideAnimationScroll("up")}
        className="max-w-[1100px] mx-auto grid gap-6 place-items-center"
      >
        <div className="flex flex-col items-center justify-center ">
          <h1 className="text-black/90 text-4xl md:text-5xl max-lg:text-center max-md:text-center max-md:p-2 max-lg:p-3 ">
            How Common is{" "}
            <span className="text-[#0FACEF]">Erectile Dysfunction ?</span>
          </h1>
          <p className="text-gray max-md:p-4 max-lg:p-5 my-5 text-center text-black/90 max-w-[900px] ">
            According to an American study, ED affects almost half of all men
            between the ages of 40 and 70 to a varying degree.
            <br />
            <br />
            Although the risk of erectile dysfunction increases with age, ED is
            not an inevitable consequence of getting older. It may be more
            difficult to get an erection as you age, but that does not
            necessarily mean that it cannot be made better. In general, the
            healthier a man is, the better his sexual function.
          </p>
          <img
            src={Image}
            alt=""
            className="w-[60vw] border-2 border-black/80"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Content4;
