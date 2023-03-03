const ArticleCard = ({ img, title }) => {
  return (
    <div className="card w-full sm:w-1/2 md:w-1/3 min-h-[280px]">
      <div className="card-img">
        <img src={img} alt="" className="w-full relative" />
      </div>
      <div className="card-desc mt-10 px-2">
        <h3 className="text-xl font-semibold leading-[120%] text-Black mb-3">
          {title}
        </h3>
        <p className="text-base font-normal text-Black leading-[150%] mb-3">
          Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.
        </p>
        <p className="cursor-pointer text-Blue font-semibold text-base leading-[150%] ">
          Read Now
        </p>
      </div>
    </div>
  );
};

export default ArticleCard;
