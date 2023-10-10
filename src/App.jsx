import "./App.css";
import CardJob from "./components/cardJobs";
import SearchBar from "./components/searchBar";
import desktop from "./assets/bg-header-desktop.svg";

function App() {
  return (
    <>
      <div className="bg-Light-Grayish-bg w-screen h-screen">
        {/* <div data-theme="mytheme"> */}
        <img
          src={desktop}
          alt="header-desktop"
          className="w-screen bg-Primary-color"
        />
        <SearchBar />
        <CardJob />
      </div>
    </>
  );
}

export default App;
