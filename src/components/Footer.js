import { Link } from "react-router-dom";
import cloud from "../img/Soundcloud.png";
import apple from "../img/Apple Podcast.png";
import google from "../img/Google Podcast.png";
import logo from "../img/LogoWhite.svg";
import spotify from "../img/Spotify.png";
const Footer = () => {
  return (
    <footer>
      {/* Footer Top  */}
      <div className=" px-10 md:px-20 md:py-10 py-5 bg-Black flex flex-col md:flex-row md:justify-between">
        <div className="cursor-pointer mb-6">
          <img src={logo} alt="logo" />
        </div>
        <div className="logo">
          <h5 className="text-white font-bold text-xl">Pages</h5>
          <ul className="my-6">
            <li className="footer-menu">
              <Link to="/">Home</Link>
            </li>
            <li className="footer-menu">
              <Link>PodCast</Link>
            </li>
            <li className="footer-menu">
              <Link>Host</Link>
            </li>
            <li className="footer-menu">
              <Link>Blog</Link>
            </li>
          </ul>
        </div>
        <div className="logo">
          <h5 className="text-white font-bold text-xl">Reach Us</h5>
          <ul className="my-6">
            <li className="footer-menu">
              <Link to="/">Contact</Link>
            </li>
            <li className="footer-menu">
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
        <div className="logo">
          <h5 className="text-white font-bold text-xl">Subscribe</h5>
          <ul className="my-6">
            <li className="mt-4 cursor-pointer">
              <img src={apple} className="w-3/4" alt="apple" />
            </li>
            <li className="mt-4  cursor-pointer">
              <img src={google} className="w-3/4" alt="google" />
              
            </li>
            <li className="mt-4  cursor-pointer">
              <img src={cloud} className="w-3/4" alt="cloud" /> 
            </li>
            <li className="mt-4  cursor-pointer">
              <img src={spotify} className="w-3/5" alt="spotify" />
            </li>
          </ul>
        </div>
      </div>
      {/* Footer Bottom  */}
      <div className="bg-[#503AE7] text-center p-3">
        <span className="text-white  text-base font-bold">
          &copy; Copyright Finsweet 2021
        </span>
      </div>
    </footer>
  );
};

export default Footer;
