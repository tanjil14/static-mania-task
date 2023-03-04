import epIcon from "../img/episode/Episode Icon.png";
import listenIcon from "../img/episode/listen.png";
const CardItem = ({ img, title }) => {
  return (
    <div className="card w-full p-2">
      <div className="card-img relative">
        <img src={img} alt="" className="w-full relative" />
        <img
          src={epIcon}
          className="w-6 absolute cursor-pointer top-3 right-3"
          alt=""
        />
      </div>
      <div className="card-desc my-8">
        <h3 className="text-xl font-semibold leading-[125%] text-Black mb-3">
          {title}
        </h3>
        <p className="text-base font-normal text-Black leading-[150%] mb-4">
          Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.
        </p>
        <div className="flex gap-3">
          <img src={listenIcon} className="w-6 cursor-pointer" alt="" />
          <span className="cursor-pointer text-Blue font-semibold text-base leading-[150%]">
            Listen Now
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
