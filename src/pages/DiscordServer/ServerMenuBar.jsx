import { useParams } from "react-router-dom";
import servers from "../../../Data/Servers";
const ServerMenuBar = () => {
  const params = useParams();
  const data = servers.filter((server) => {
    return server.id == params.id;
  });
  return (
    <div className="bg-[#2B2D31] menu flex flex-col space-y-5 p-2 text-white w-72">
      <ul className="flex flex-col space-y-5">
        <li className="border-b border-black pb-3 ">
          <p className="bg-[#2e2d2f] w-full p-1 border border-black text-sm rounded-lg">
            # {data[0].name}
          </p>
        </li>
        <p className="text-sm p-2 font-medium">
          Text Channels <span className="ml-10 text-lg font-medium p-2">^</span>
        </p>
        {data[0].items.map((item) => {
          return <li key={item.name}># {item.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default ServerMenuBar;
