import React from "react";
import img from "../../../../assets/hanging_out_easy_landing.svg";

const Section3 = () => {
  return (
    <section className="bg-[#f6f4f4ae] text-black flex flex-row items-center justify-around p-8 space-x-14 h-[80vh]">
      <div className="w-2/5 order-2">
        <img src={img} alt="img" className="w-[100%]" />
      </div>
      <div className="w-1/3 p-5 space-y-5 leading-tight order-1">
        <p className="text-6xl font-bold">
          Create an Invite-only place where you belong
        </p>
        <p className="text-lg">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
          velit, est eius sequi sit dicta, natus laboriosam quod ea illum
          dolorum assumenda ut! Officiis veniam, maxime hic qui voluptatum
          tenetur aliquid blanditiis.
        </p>
      </div>
    </section>
  );
};

export default Section3;
