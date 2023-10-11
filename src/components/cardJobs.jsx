import data from "../data/data.json";
import PropTypes from "prop-types";

function CardJob({ handleAddTag, filteredItems }) {
  const itemsToDisplay = filteredItems.length > 0 ? filteredItems : data;

  return (
    <div className="mt-20 pb-20 flex flex-col items-center bg-Light-Grayish-bg">
      {itemsToDisplay.map((item, index) => {
        //Combine tags from different categories into a single array
        const roles = item.role;
        const languages = item.languages;
        const tools = item.tools;
        const combineTags = [roles, ...languages, ...tools];

        return (
          <div
            key={index}
            className="bg-white rounded-md drop-shadow-3xl p-6 lg:pt-6 lg:flex lg:flex-row lg:justify-between lg:items-center lg:w-[1000px] lg:mt-6 mobile:relative mobile:flex mobile:flex-col mobile:w-[330px] mobile:mt-12 mobile:pb-4 mobile:pt-10 mobile:px-6"
          >
            <div className="flex gap-4">
              {item.postedAt === "1d ago" ? (
                <div className="w-[6px] h-full bg-Primary-color absolute z-20 top-0 left-0 rounded-l-md"></div>
              ) : null}
              <img
                src={item.logo}
                alt={item.company}
                className="lg:w-20 lg:h-20 lg:static mobile:absolute mobile:top-[-30px] mobile:left-6 mobile:w-14 mobile:h-14"
              />
              <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <p className="text-headline2 text-Primary-color">
                    {item.company}
                  </p>

                  {item.new ? (
                    <div className="text-[12px] font-bold bg-Primary-color text-white rounded-full px-2 py-[2px] uppercase self-center">
                      New!
                    </div>
                  ) : null}

                  {item.featured ? (
                    <div className="text-[12px] font-bold bg-Dark-color text-white rounded-full px-2 py-[2px] uppercase self-center">
                      Featured
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

            <div className="lg:hidden mobile:w-full mobile:h-[1.2px] mobile:bg-Gray-color mobile:my-4"></div>
            {/* Combine tags from different categories into a single array */}
            <div className="self-start">
              {combineTags.map((tag, index) => (
                <div
                  key={index}
                  onClick={() => handleAddTag(tag)}
                  className="text-headline2 inline-block px-2 py-1 m-2 cursor-pointer bg-Light-color text-Primary-color rounded hover:bg-Primary-color hover:text-white"
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
