import React from "react";

const Content5 = () => {
  return (
    <div className="w-full white py-14">
      <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-6 place-items-center">
        <div className="flex flex-col items-center justify-center max-lg:pl-4 max-xl:pl-7">
          <h1 className="text-black/90 text-4xl md:text-5xl max-md:text-center">
            What Causes{" "}
            <span className="text-[#0FACEF]">Erectile Dysfunction?</span>
          </h1>
          <p className="text-gray my-5  text-black/90 max-md:text-center ">
            There are many causes for ED which can be Psychological or Physical
            and usually a combination of factors. These include:
          </p>
        </div>
        <ul className="text-black/90 max-md:text-center max-md:p-4">
          <li>● Heart and vessels (Cardiovascular disease)</li>
          <li>● Diabetes Mellitus and Hypertension</li>
          <li>● Damage to arteries and nerves from cancer or surgery</li>
          <li>● Low Testosterone or other hormonal problems</li>
          <li>● Neurological disease</li>
          <li>● Stress and anxiety</li>
          <li>● Relationship problems</li>
          <li>● Drug and alcohol abuse</li>
          <li>● Excessive Smoking</li>
          <li>● High Cholesterol and triglycerides</li>
        </ul>
      </div>
    </div>
  );
};

export default Content5;
