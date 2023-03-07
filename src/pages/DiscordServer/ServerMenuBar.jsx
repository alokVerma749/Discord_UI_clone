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
        <li className="pb-3">
          <p className="text-white font-bold w-full p-1  text-base rounded-lg">
            <span className="text-[#c4c4c56c] text-xl font-bold mr-3">#</span>{" "}
            {data[0].name}
          </p>
        </li>
        <p className="text-sm p-2 font-medium">
          Text Channels <span className="ml-10 text-lg font-medium p-2">^</span>
        </p>
        {data[0].items.map((item) => {
          return (
            <li
              key={item.name}
              className="p-2 hover:bg-[#1b1c1eb4] text-base rounded-lg "
            >
              <span className="text-[#c4c4c56c] text-xl font-bold mr-3">#</span>{" "}
              {item.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ServerMenuBar;
