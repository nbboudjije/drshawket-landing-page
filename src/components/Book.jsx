import React from "react";

const Book = () => {
  return (
    <div className="w-full py-14 bg-black/90 text-white" id="contact">
      <div className="max-w-[1100px] mx-auto ">
        <h1 className="text-center text-3xl md:text-4xl max-md:p-5 ">
          Book An <span className="text-[#0FACEF]">Appointment</span> With{" "}
          <br></br> Dr.Shawket Alkhayal
        </h1>
        <form
          action=""
          className="mt-5 flex flex-col items-center justify-center text-white/90"
        >
          <label htmlFor="">Full Name</label>
          <input
            type="text"
            name=""
            id=""
            placeholder="Name"
            className="p-3 m-2 text-black rounded-lg"
            required
          />
          <label htmlFor="">Email</label>
          <input
            type="email"
            name=""
            id=""
            placeholder="Email"
            className="p-3 m-2 text-black rounded-lg"
            required
          />
          <label htmlFor="" placeholder="+971">
            Phone Number
          </label>
          <input
            type="text"
            name=""
            id=""
            placeholder="+971"
            className="p-3 m-2 text-black rounded-lg"
            required
          />
          <button className="bg-[#0FACEF] duration-300 text-white py-3 px-5 rounded-xl mt-4 hover:bg-white hover:text-black animate-bounce">
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Book;
