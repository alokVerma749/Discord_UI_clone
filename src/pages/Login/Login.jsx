import discordLogo from "../../../assets/discord_main_logo.svg";
import login_bg from "../../../assets/login_bg.svg";
import qr from "../../../assets/qr_code.png";
import { Link } from "react-router-dom";

function loadRegister() {
  import("../Register/Register");
}
const Login = () => {
  const handleClick = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div
        className="relative z-0 bg-cover bg-center h-screen"
        style={{ backgroundImage: `url(${login_bg})` }}
      >
        <Link to={"/"}>
          <img src={discordLogo} alt="discord" className="p-5" />
        </Link>
        <div className="bg-[#353535] text-white w-1/2 flex flex-row mx-auto">
          <div className="flex flex-col mx-auto  p-5">
            <p className="p-2 text-2xl font-extrabold text-white">
              Welcome back!
            </p>
            <p className="p-2 text-2xl font-extrabold text-white">
              We're so excited to see you again
            </p>
            <form onClick={handleClick} className="flex flex-col space-y-5 p-2">
              <label htmlFor="email">Email</label>
              <input
                className="w-[95%] bg-[#2e2d2f] p-2 border border-black"
                type="text"
                id="email"
                name="email"
              />
              <label htmlFor="password">PASSWORD</label>
              <input
                className="w-[95%] bg-[#2e2d2f] p-2 border border-black"
                type="password"
                id="password"
                name="password"
              />
              <p className="text-sm text-[#3682c3] cursor-pointer">
                Forgot Your Password?
              </p>
              <button className="bg-[#2e3bc8] p-2 text-xl font-semibold text-white">
                Login
              </button>
              <p>
                Need an account?{" "}
                <span onMouseEnter={loadRegister}>
                  <Link to="/register" className="font-semibold text-[#3682c3]">
                    Register
                  </Link>
                </span>
              </p>
            </form>
          </div>
          <div className="text-center flex flex-col justify-center align-center space-y-2 w-5/12 p-2">
            <img src={qr} alt="qr" className="w-48 mx-auto" />
            <p className="text-2xl font-lg">Log in with QR Code</p>
            <p className="text-md">
              Scan with the{" "}
              <span className="font-bold text-lg">Discord mobile app</span> to
              login instatly.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
