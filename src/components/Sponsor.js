import logo1 from "../img/sponsors/Logo1.png";
import logo2 from "../img/sponsors/Logo2.png";
import logo3 from "../img/sponsors/Logo3.png";
import logo4 from "../img/sponsors/Logo4.png";
import logo5 from "../img/sponsors/Logo5.png";
const Sponsor = () => {
  return (
    <section className="relative top-48 md:top-20">
      <div className="bg-Blue py-5">
        <h1 className="text-center my-4 text-3xl font-bold text-white">
          Our Sponsors
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 place-items-center gap-3">
          <div className="p-6">
            <img src={logo1} className="" alt="" />
          </div>
          <div className="p-6">
            <img src={logo2} className="" alt="" />
          </div>
          <div className="p-6">
            <img src={logo3} className="" alt="" />
          </div>
          <div className="p-6">
            <img src={logo4} className="" alt="" />
          </div>
          <div className="p-6">
            <img src={logo5} className="" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsor;
