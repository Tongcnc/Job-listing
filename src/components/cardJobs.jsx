import data from "../data/data.json";
import PropTypes from "prop-types";

function CardJob({ handleAddTag, filteredItems }) {
  const itemsToDisplay = filteredItems.length > 0 ? filteredItems : data;

  return (
    <div className="mt-10 pb-20 flex flex-col items-center bg-Light-Grayish-bg">
      {itemsToDisplay.map((item, index) => {
        const roles = item.role;
        const languages = item.languages;
        const tools = item.tools;
        const combineTags = [roles, ...languages, ...tools];

        return (
          <div
            key={index}
            className="bg-white rounded-md drop-shadow-3xl w-[1000px] p-10 my-6 flex justify-between items-center"
          >
            <div className="flex gap-4">
              <img src={item.logo} alt={item.company} className="w-20 h-20" />
              <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <p className="text-headline2 text-Primary-color">
                    {item.company}
                  </p>

                  {item.featured ? (
                    <div className="text-headline2 bg-Dark-color text-white rounded-full px-2 uppercase">
                      Featured
                    </div>
                  ) : null}

                  {item.new ? (
                    <div className="text-headline2 bg-Primary-color text-white rounded-full px-2 uppercase">
                      New!
                    </div>
                  ) : null}
                </div>
                <h3 className="text-headline1 text-Dark-color cursor-pointer hover:text-Primary-color">
                  {item.position}
                </h3>
                <div className="flex gap-4 text-Gray-color text-body2">
                  <span>{item.postedAt}</span>
                  <span>●</span>
                  <span>{item.contract}</span>
                  <span>●</span>
                  <span>{item.location}</span>
                </div>
              </div>
            </div>
            {/* Combine tags from different categories into a single array */}
            <div className="flex gap-4">
              {combineTags.map((tag, index) => (
                <div
                  key={index}
                  onClick={() => handleAddTag(tag)}
                  className="text-headline2 inline-block px-2 py-1 cursor-pointer bg-Light-color text-Primary-color rounded hover:bg-Primary-color hover:text-white"
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

CardJob.propTypes = {
  handleAddTag: PropTypes.func.isRequired,
  filteredItems: PropTypes.array.isRequired,
};

export default CardJob;
