import OptionBtn from "../components/OptionBtn";
import servers from "../../../../Data/Servers";

const OptionBar = () => {
  return (
    <div className="option">
      <ul className="flex flex-col list-none h-screen space-y-8 py-5 px-2">
        {servers.map((server) => (
          <OptionBtn name={server.name} img={server.DP} link={server.linkTo} />
        ))}
      </ul>
    </div>
  );
};

export default OptionBar;
