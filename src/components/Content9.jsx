import React from "react";

const Content9 = () => {
  return (
    <div className="w-full bg-[#25262b] py-14">
      <div className="max-w-[1100px] mx-auto grid gap-6">
        <div className="flex flex-col items-center justify-center ">
          <h1 className="text-white text-4xl md:text-5xl max-md:text-center">
            When To See Your Doctor
          </h1>
          <p className="text-gray my-5 max-xl:p-7 max-md:p-4 max-lg:p-4 text-[#cfcfcf] text-center ">
            If your situation doesn’t improve on its own, or if you suspect
            there is a physical issue impeding your sex life, it is time to
            visit a doctor. To find a solution that will suit you, he will give
            you a physical examination, check which medications you are taking,
            and review your lifestyle and medical history.
          </p>
          <button className="bg-[#0FACEF] duration-300 text-white py-3 px-5 rounded-xl mt-4 hover:bg-white hover:text-black">
            Book An Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Content9;
