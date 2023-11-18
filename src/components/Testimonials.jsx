import React, { useEffect } from "react";
import Swiper from "swiper";
import { FaStar } from "react-icons/fa";
import { MdStarRate } from "react-icons/md";

const Testimonials = () => {
  useEffect(() => {
    const swiper = new Swiper(".swiper-container", {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    return () => {
      swiper.destroy();
    };
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      testimonial:
        "'Dr. Alkhayal is an excellent doctor. He explained everything clearly. I highly recommended him - the staff at the clinic are also so helpful'",
      source: "Doctify",
      stars: <MdStarRate size={32} />,
    },
    {
      id: 2,
      name: "Jane Smith",
      testimonial:
        "The doctor is a great listener and makes the patient comfortable and explain in a way that is easy to comprehend",
      source: "Doctify",
      stars: <MdStarRate size={32} />,
    },
    {
      id: 3,
      name: "Jane Smith",
      testimonial:
        "Professional and friendly. Helped me understand each stage of the procedure",
      source: "Doctify",
      stars: <MdStarRate size={32} />,
    },
    // Add more testimonials as needed
  ];
  return (
    <div className="w-full bg-gray-100 py-12">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-4xl md:text-5xl text-center mb-9 text-black/90">
          Testimonials
        </h2>
        <div className="swiper-container">
          <div className="swiper-wrapper">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="swiper-slide">
                <div className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-center items-center">
                  <div className="pb-4">
                    <p className="mt-4 text-center flex flex-row text-yellow-400">
                      {testimonial.stars}
                      {testimonial.stars}
                      {testimonial.stars}
                      {testimonial.stars}
                      {testimonial.stars}
                    </p>
                  </div>
                  <p className="text-gray-700 text-center">
                    {testimonial.testimonial}
                  </p>
                  <p className="text-gray-600 mt-4 text-center"></p>
                  <p className="text-gray-600 mt-4 text-center">
                    Source : {testimonial.source}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
