import OptionBar from "./components/OptionBar";
import DashboardMenuBar from "./components/DashboardMenuBar";
import Main from "./components/Main";

const Dashboard = () => {
  return (
    <section className="dashboard bg-[#1E1F22] h-screen flex flex-row">
      <OptionBar />
      <DashboardMenuBar />
      <Main />
    </section>
  );
};

export default Dashboard;
