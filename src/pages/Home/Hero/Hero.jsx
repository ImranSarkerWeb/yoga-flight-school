// import heroImg from "../../../assets/error/errorpage.jpg";
import "./Hero.css";
import logo from "../../../assets/yogaLogo.png";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="hero heroBody mt-8 mb-20 min-h-screen">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className=" flex flex-col justify-center items-center">
          <h1 className="mb-5 text-4xl md:text-7xl font-bold">
            Welcome To Yoga Flight
          </h1>
          <h1 className="mb-5 text-3xl md:text-5xl font-bold">
            School Of Yoga
          </h1>
          <img className="w-60 mt-36" src={logo} alt="Yoga flight logo" />

          <Link to="/classes" className="btn btn-primary my-11">
            Enroll Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
