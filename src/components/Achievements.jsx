import React from "react";
import { FaBriefcaseMedical } from "react-icons/fa6";
import { FaHandHoldingMedical } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";

const Achievements = () => {
  return (
    <div className="w-full py-8 bg-black/90 text-white">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid md:grid-cols-3 place-items-center ">
          <div className="flex flex-col justify-center items-center gap-5 hover:text-[#0FACEF] duration-300 p-3 md:p-1">
            <FaBriefcaseMedical size={40} />

            <h1>25+ Years of Experience</h1>
          </div>
          <div className="flex flex-col justify-center items-center gap-5 hover:text-[#0FACEF] duration-300 p-3 md:p-1">
            <p>
              <FaCircleCheck size={40} />
            </p>
            <h1>1500+ Successful Cases</h1>
          </div>
          <div className="flex flex-col justify-center items-center gap-5 hover:text-[#0FACEF] duration-300 p-3 md:p-1">
            <p>
              <FaHandHoldingMedical size={40} />
            </p>
            <h1>25000+ Happy Patients</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
