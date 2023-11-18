import React from "react";
import Image from "../assets/sexual-dysfunction-1.jpg";

import { headTextAnimation } from "../motion";
import { motion } from "framer-motion";

const Content7 = () => {
  return (
    <div className="w-full bg-[#25262b] py-14">
      <img src={Image} alt="" className="w-[60vw] border-2 border-black/80" />
      <motion.div
        {...slideAnimationScroll("up")}
        className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-6 place-items-center"
      >
        <div className="flex flex-col items-center justify-center p-3 sm:pr-7 md:pr-3">
          <motion.h1
            {...slideAnimationScroll("left")}
            className="text-white max-xs:p-0 text-4xl md:text-5xl max-md:text-center max-sm:p-2 max-md:p-1"
          >
            What is <span className="text-[#0FACEF]">Sexual dysfunction ?</span>
          </motion.h1>
          <p className="text-gray my-5 text-[#cfcfcf] max-md:text-center max-md:p-4">
            Treatments for Erectile Dysfunction range from counselling and
            lifestyle changes to medications, injections or surgery. If you
            suffer from ED, it is important to talk to Dr Shawket Alkhayal Who
            is a world expert in the management of Erectile Dysfunction. He can
            help identify the cause of your ED and recommend the most
            appropriate and personalized treatment for you.
          </p>
          <p className="text-gray my-5 text-[#cfcfcf] max-md:text-center max-md:p-4">
            Apart from the temporary medical treatments that are well known in
            pharmacies, One of the newest and permanently effective treatments
            available today is
            <span>Platelet Rich Plasma (PRP) penile rejuvenation</span>, which
            is widely used in the United States and Dr Shawket is exclusively
            licensed to provide this treatment and train other doctors in the
            Middle East. It results in penile corporeal rejuvenation leading to
            a harder and sustainable erection. It can also result in penis
            enlargement when used according to a special protocol with a vacuum
            pump.
          </p>
        </div>
        <div className="">
          <p className="text-gray text-[#cfcfcf] max-md:text-center max-md:p-4">
            <span>Low intensity shockwave therapy</span> is another effective
            treatment modality for Erectile dysfunction, that improves the blood
            flow into the penis by stimulating the formation of new blood
            vessels and thus enhancing a man’s ability to attain and maintain a
            stronger erection. We have one of the most advanced devices with a
            linear applicator for delivering Shockwave therapy for erectile
            dysfunction, covering the whole penis.
          </p>
          <p className="text-gray my-5 text-[#cfcfcf] max-md:text-center max-md:p-4">
            When all these and other treatments like penile intra-cavernosal
            injections fail, then a penile implant is usually recommended. There
            are many types of these implants available and can be discussed with
            doctor Alkhayal for the most suitable device in your condition.
          </p>
          <p className="text-gray my-5 text-[#cfcfcf] max-md:text-center max-md:p-4">
            Do not hesitate to get in touch with Dr Shawket Alkhayal who is a
            world expert in treating erectile dysfunction and premature
            ejaculation and who will be more than happy to help you improve the
            quality of your life.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Content7;
