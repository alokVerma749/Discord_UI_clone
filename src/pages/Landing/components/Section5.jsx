import React from "react";
import just_chiling_landing from "../../../../assets/just_chiling_landing.svg";

const Section5 = () => {
  return (
    <section className="bg-[#f6f4f4ae] text-black flex flex-col items-center space-y-10 p-10 ">
      <div className="leading-tight w-9/12 space-y-6">
        <p className="text-6xl font-bold">
          Create an Invite-only place where you belong
        </p>
        <p className="text-lg text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
          velit, est eius sequi sit dicta, natus laboriosam quod ea illum
          dolorum assumenda ut! Officiis veniam, maxime hic qui voluptatum
          tenetur aliquid blanditiis.
        </p>
      </div>
      <div className="w-7/12">
        <img src={just_chiling_landing} alt="img" className="w-[100%]" />
      </div>
      <p className="text-4xl font-bold text-center">
        Ready to start your journey
      </p>
      <button className="w-[30%] bg-[#5865f2] text-white text- center rounded-3xl p-5">
        Download for Mac
      </button>
    </section>
  );
};

export default Section5;
