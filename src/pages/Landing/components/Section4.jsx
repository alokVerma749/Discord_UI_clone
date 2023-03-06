import React from "react";
import img from "../../../../assets/fandom_landing.svg";

const Section4 = () => {
  return (
    <section className="bg-white text-black flex flex-row items-center justify-around p-8 space-x-14 h-[80vh]">
      <div className="w-2/5">
        <img src={img} alt="img" className="w-[100%]" />
      </div>
      <div className="w-1/3 p-5 space-y-5 leading-tight">
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

export default Section4;
