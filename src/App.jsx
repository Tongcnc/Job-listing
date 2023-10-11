import "./App.css";
import desktop from "./assets/bg-header-desktop.svg";
import { useState } from "react";
import CardJob from "./components/cardJobs";
import SearchBar from "./components/searchBar";

function App() {
  const [selectTags, setSelectedTags] = useState([]);

  const handleClickClear = () => {
    setSelectedTags([]);
  };

  const handleAddTag = (tag) => {
    const updatedTags = [...selectTags, tag];
    setSelectedTags(updatedTags);
  };

  const handleClickDelete = () => {
    const updatedTags = selectTags.slice(0, -1);
    setSelectedTags(updatedTags);
  };

  console.log(selectTags);
  return (
    <>
      <div className="bg-Light-Grayish-bg h-100vh relative">
        <img
          src={desktop}
          alt="header-desktop"
          className="w-screen bg-Primary-color"
        />

        <SearchBar
          handleClickClear={handleClickClear}
          handleClickDelete={handleClickDelete}
          selectTags={selectTags}
        />

        <CardJob
          selectTags={selectTags}
          handleAddTag={handleAddTag}
          // setSelectTags={setSelectTags}
        />
      </div>
    </>
  );
}

export default App;
