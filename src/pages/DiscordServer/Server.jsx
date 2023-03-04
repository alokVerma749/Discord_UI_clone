import OptionBar from "../Dashboard/components/OptionBar";
import ServerMenuBar from "../DiscordServer/ServerMenuBar";
const Server = () => {
  return (
    <section className="dashboard bg-[#1E1F22] h-screen flex flex-row">
      <OptionBar />
      <ServerMenuBar />
    </section>
  );
};

export default Server;
