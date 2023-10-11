function SearchBar({ handleClickClear, handleClickDelete, selectTags }) {
  return (
    <div className="absolute top-[130px] left-[50%] translate-x-[-50%]">
      <div className="bg-white rounded-md drop-shadow-3xl w-[1000px] h-16 px-10 flex justify-between items-center">
        <div className="flex gap-4">
          {selectTags
            ? selectTags.map((word, index) => {
                return (
                  <div key={index} className="text-headline2 flex">
                    <p className="bg-Light-color text-Primary-color px-2 py-1 rounded-l">
                      {word}
                    </p>
                    <svg
                      clipRule="evenodd"
                      fillRule="evenodd"
                      strokeLinejoin="round"
                      strokeMiterlimit="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 bg-Primary-color cursor-pointer px-1 py-1 rounded-r hover:bg-Dark-color"
                      onClick={handleClickDelete}
                    >
                      <path
                        stroke="white"
                        strokeWidth="2"
                        d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"
                      />
                    </svg>
                  </div>
                );
              })
            : null}
        </div>
        <div
          onClick={handleClickClear}
          className="text-headline2 text-Gray-color hover:underline cursor-pointer hover:text-Primary-color"
        >
          Clear
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
