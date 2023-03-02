import OptionBtn from "./components/OptionBtn";
import disCordSmall from "../../../assets/discord_mini_icon.svg";
import newLine from "../../../assets/new_line.png";
import plus from "../../../assets/plus.svg";
// import disCordSmall from "../../../assets/discord_mini_icon.svg";
// import disCordSmall from "../../../assets/discord_mini_icon.svg";
const Dashboard = () => {
  return (
    <section className="dashboard bg-gray-800 h-screen flex flex-row">
      {/* option bar */}
      <div className="option">
        <ul className="list-none h-screen space-y-8 py-5 px-2 border border-red-600">
          <li>
            <OptionBtn index={0} img={disCordSmall} />
          </li>
          <li>
            <OptionBtn index={1} img={newLine} />
          </li>
          <li>
            <OptionBtn index={2} img={plus} />
          </li>
          <li>
            <OptionBtn index={3} img={disCordSmall} />
          </li>
          <li>
            <OptionBtn index={4} img={disCordSmall} />
          </li>
        </ul>
      </div>
      <div className="menu flex flex-col space-y-5 border border-green-600 p-5 text-white ">
        <ul>
          <li>
            <input type="text" name="" id="" />
          </li>
          <li>Friends</li>
          <li>Stage Dicovery</li>
          <li>Nitro</li>
        </ul>
        <div>
          <p>
            Direct Messages <span>+</span>
          </p>
          <ul>
            <li>options</li>
          </ul>
        </div>
      </div>
      <div className="main">
        main
        <header></header>
        <main>
          <div></div>
          <div className="active"></div>
        </main>
      </div>
    </section>
  );
};

export default Dashboard;
