import discordLogo from "../../../assets/discord_main_logo.svg";
import login_bg from "../../../assets/login_bg.svg";
import { Link } from "react-router-dom";

const Register = () => {
  const handleClick = (e) => {
    e.preventDefault();
    console.log("clicked");
  };
  return (
    <>
      {/* BG */}
      <div
        className="relative z-0 bg-cover bg-center h-screen"
        style={{ backgroundImage: `url(${login_bg})` }}
      >
        <Link to={"/"}>
          <img src={discordLogo} alt="discord" className="p-5" />
        </Link>
        {/* form */}
        <div className="bg-[#353535] text-white w-2/6 flex flex-col mx-auto">
          <p className="text-center p-2 text-2xl font-extrabold text-white">
            Create an account
          </p>
          <form onClick={handleClick} className="flex flex-col space-y-5 p-5">
            <label htmlFor="email">EMAIL</label>
            <input
              className="w-[95%] bg-[#2e2d2f] p-2 border border-black"
              type="text"
              id="email"
              name="email"
            />
            <label htmlFor="username">USERNAME</label>
            <input
              className="w-[95%] bg-[#2e2d2f] p-2 border border-black"
              type="text"
              id="username"
              name="username"
            />
            <label htmlFor="password">PASSWORD</label>
            <input
              className="w-[95%] bg-[#2e2d2f] p-2 border border-black"
              type="password"
              id="password"
              name="password"
            />
            <button className="bg-[#2e3bc8] p-2 text-xl font-semibold text-white">
              Continue
            </button>
            <Link to="/login" className="text-sm text-[#3682c3]">
              Already have an account?
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
