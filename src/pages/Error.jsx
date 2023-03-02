import discordLogo from "../../assets/discord_main_logo.svg";
import login_bg from "../../assets/login_bg.svg";

const error = () => {
  return (
    <div
      className="relative z-0 bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${login_bg})` }}
    >
      <img src={discordLogo} alt="discord" className="p-5" />
      <div className="box mx-auto p-12 text-center m-12 bg-slate-700 w-fit">
        <h1 className="text-2xl text-white font-medium">
          Something happened Wrong 😔
        </h1>
      </div>
    </div>
  );
};

export default error;
