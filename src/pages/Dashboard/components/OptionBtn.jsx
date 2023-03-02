import { Link } from "react-router-dom";
import { useState } from "react";
const OptionBtn = (props) => {
  const { index, img } = props;
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div
      onClick={() => {
        setActiveIndex(index);
      }}
      className={`w-12 h-12 flex justify-center items-center  p-1 rounded-3xl hover:rounded-2xl ${
        activeIndex === index ? "bg-[#2e3bc8] fill-[$ffffff]" : "bg-[#353535]"
      }`}
    >
      <Link to="">
        <img src={img} alt="options" className="" />
      </Link>
    </div>
  );
};

export default OptionBtn;
