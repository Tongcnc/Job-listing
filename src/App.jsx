import "./App.css";
import desktop from "./assets/bg-header-desktop.svg";
import { useEffect, useState } from "react";
import CardJob from "./components/cardJobs";
import SearchBar from "./components/searchBar";
import data from "./data/data.json";

function App() {
  const [selectTags, setSelectedTags] = useState([]);
  const [filteredItems, setFilteredItems] = useState(data);

  const handleClickClear = () => {
    setSelectedTags([]);
    setFilteredItems(data);
  };

  const handleAddTag = (tag) => {
    if (!selectTags.includes(tag)) {
      const updatedTags = [...selectTags, tag];
      setSelectedTags(updatedTags);

      const matchingItems = data.filter((item) => {
        return updatedTags.every((selectedTag) => {
          return (
            item.role === selectedTag ||
            item.languages.includes(selectedTag) ||
            item.tools.includes(selectedTag)
          );
        });
      });
      setFilteredItems(matchingItems);
    }
  };

  const handleClickDelete = () => {
    const updatedTags = selectTags.slice(0, -1);
    setSelectedTags(updatedTags);
  };

  useEffect(() => {
    handleAddTag();
    setSelectedTags([]);
  }, []);

  console.log(selectTags);
  return (
    <>
      <div className="bg-Light-Grayish-bg h-screen">
        <img
          src={desktop}
          alt="header-desktop"
          className="w-screen bg-Primary-color mobile:h-[160px]"
        />

        <SearchBar
          handleClickClear={handleClickClear}
          handleClickDelete={handleClickDelete}
          selectTags={selectTags}
        />

        <CardJob handleAddTag={handleAddTag} filteredItems={filteredItems} />
      </div>
    </>
  );
}

export default App;
