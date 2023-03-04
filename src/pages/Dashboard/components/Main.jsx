import no_online_friends from "../../../../assets/no_online_friends.svg";
const Main = () => {
  return (
    <div className="main bg-[#313338] w-full max-w-screen overfolw-hidden">
      <header className="border-b border-black mx-4">
        <ul className="p-2 list-none flex flex-row justify-start space-x-10 text-white items-center ">
          <li className="p-1 rounded-md flex flex-row gap-x-4 justify-start align-center hover:bg-[#404249]">
            <div className="w-7">
              <svg aria-hidden="false" viewBox="0 0 24 24">
                <g fill="none" fill-rule="evenodd">
                  <path
                    fill="currentColor"
                    fill-rule="nonzero"
                    d="M0.5,0 L0.5,1.5 C0.5,5.65 2.71,9.28 6,11.3 L6,16 L21,16 L21,14 C21,11.34 15.67,10 13,10 C13,10 12.83,10 12.75,10 C8,10 4,6 4,1.5 L4,0 L0.5,0 Z M13,0 C10.790861,0 9,1.790861 9,4 C9,6.209139 10.790861,8 13,8 C15.209139,8 17,6.209139 17,4 C17,1.790861 15.209139,0 13,0 Z"
                    transform="translate(2 4)"
                  ></path>
                  <path d="M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z"></path>
                </g>
              </svg>
            </div>
            <p className="font-normal text-base">Friends</p>
          </li>
          <li className="p-1 rounded-md flex flex-row gap-x-4 justify-start align-center hover:bg-[#404249]">
            <p className="font-normal text-base">Online</p>
          </li>
          <li className="p-1 rounded-md flex flex-row gap-x-4 justify-start align-center hover:bg-[#404249]">
            <p className="font-normal text-base">All</p>
          </li>
          <li className="p-1 rounded-md flex flex-row gap-x-4 justify-start align-center hover:bg-[#404249]">
            <p className="font-normal text-base">Pending</p>
          </li>
          <li className="p-1 rounded-md flex flex-row gap-x-4 justify-start align-center hover:bg-[#404249]">
            <p className="font-normal text-base">Blocked</p>
          </li>
          <li className="p-1 rounded-md flex flex-row gap-x-4 justify-start align-center bg-green-400 hover:bg-green-300 h-fit">
            <p className="text-base">Add Friend</p>
          </li>
        </ul>
      </header>
      <main className="flex flex-row justify-center items-center p-2 h-[84vh]">
        <div className="w-[70%]">
          <img className="w-96 mx-auto" src={no_online_friends} alt="" />
          <p className="text-center text-gray-400/100 text-sm mt-2 font-blod">No one's around to play with Wumpus</p>
        </div>
        <div className="active border-white border-l text-white h-full flex gap-y-14 flex-col p-5 h-[84vh]">
          <p className="text-2xl font-extrabold mt-8">Active Now</p>
          <div className="text-center text-lg font-bold">
            <p>It's quick for now....</p>
            <p className="text-center text-sm font-semibold">
              When a friend starts an activity-like playing a game or hanging
              out on voice-we'll show it here!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Main;
