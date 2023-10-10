import PhotoSnap from "../assets/photosnap.svg";

function CardJob() {
  return (
    <div className="mt-10 flex justify-center">
      <div className="bg-white rounded-md drop-shadow-3xl w-[1000px] p-10 my-6 flex justify-between items-center">
        <div className="flex gap-4">
          <img src={PhotoSnap} alt="job-office" className="w-20 h-20" />
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <p className="text-headline2 text-Primary-color">Photoshop</p>
              <div className="text-headline2 bg-Primary-color text-white rounded-full px-2 uppercase">
                New!
              </div>
              <div className="text-headline2 bg-Dark-color text-white rounded-full px-2 uppercase">
                Featured
              </div>
            </div>
            <h3 className="text-headline1 text-Dark-color cursor-pointer hover:text-Primary-color ">
              Senior Frontend Developer
            </h3>
            <div className="flex gap-4 text-Gray-color text-body2">
              <span>1d ago</span>
              <span>●</span>
              <span>Full Time</span>
              <span>●</span>
              <span>USA only</span>
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="text-headline2 inline-block px-2 py-1 cursor-pointer bg-Light-color text-Primary-color rounded hover:bg-Primary-color hover:text-white">
            Frontend
          </div>
          <div className="text-headline2 inline-block px-2 py-1 cursor-pointer bg-Light-color text-Primary-color rounded hover:bg-Primary-color hover:text-white">
            Senior
          </div>
          <div className="text-headline2 inline-block px-2 py-1 cursor-pointer bg-Light-color text-Primary-color rounded hover:bg-Primary-color hover:text-white">
            CSS
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardJob;
