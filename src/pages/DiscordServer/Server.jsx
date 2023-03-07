import OptionBar from "../Dashboard/components/OptionBar";
import ServerMenuBar from "../DiscordServer/ServerMenuBar";
import ServerMainPage from "../DiscordServer/ServerMainPage";
import OnlineUsers from "./OnlineUsers";
const Server = () => {
  return (
    <section className="dashboard bg-[#1E1F22] flex flex-row h-screen">
      <OptionBar />
      <ServerMenuBar />
      <ServerMainPage />
      <OnlineUsers />
    </section>
  );
};

export default Server;
