import { Link } from "react-router-dom";
import logo from "../img/Logo.svg";
const Navbar = () => {
  return (
    <nav className="px-10 md:px-20 md:py-6 py-2">
      <div className="flex justify-between">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="menu">
          <Link to="/about" className="text-Black font-normal text-base">About</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
