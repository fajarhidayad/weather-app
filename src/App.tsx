import SideBar from "./components/SideBar";
import MainContent from "./components/MainContent";

const App = () => {
  return (
    <div className="bg-[#100E1D] flex flex-col lg:flex-row">
      <SideBar />
      <MainContent />
    </div>
  );
};

export default App;
