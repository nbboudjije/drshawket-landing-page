import React from "react";
import Image from "../assets/ed.jpg";

const Content2 = () => {
  return (
    <div className="w-full bg-white py-14">
      <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-6 place-items-center">
        <img src={Image} alt="" className="object-cover w-[80vw]  " />
        <div className="flex flex-col items-center justify-center max-lg:pr-3 max-xl:pr-7">
          <h1 className="text-[#0FACEF] text-4xl md:text-5xl max-md:text-center">
            Erectile Dysfunction
          </h1>
          <p className="text-gray my-5 text-black max-md:text-center max-md:p-4">
            Erectile dysfunction (ED) is defined as the inability to attain or
            maintain an erection firm enough to have or complete a satisfactory
            sexual intercourse. It is also sometimes called impotence.
            <br />
            Erectile Dysfunction can affect anyone at any age but also it could
            be a sign of some health problems, like diabetes, hypertension or
            heart and vessel disease that needs specific treatment. It can also
            be a sign of emotional or relationship difficulties that may need to
            be addressed by a psychologist.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content2;
