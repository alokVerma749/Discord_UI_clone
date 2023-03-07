import { useParams } from "react-router-dom";
import servers from "../../../Data/Servers";
import discordLogo from "../../../assets/discord_mini_icon.svg";

const OnlineUsers = () => {
  const params = useParams();
  const data = servers.filter((server) => {
    return server.id == params.id;
  });
  return (
    <div className="bg-[#2B2D31] menu flex flex-col space-y-5 p-2 text-white w-80">
      <ul className="flex flex-col space-y-5 overflow-y-scroll h-auto">
        <p className="text-sm p-2 font-medium">Online-3</p>
        {data[0].onlineUsers.map((item) => {
          return (
            <li
              key={item}
              className="p-2 hover:bg-[#1b1c1eb4] text-base rounded-lg flex flex-row "
            >
              <img
                className="text-[#c4c4c56c] text-xl font-bold mr-3"
                src={discordLogo}
                alt="logo"
              />
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default OnlineUsers;
