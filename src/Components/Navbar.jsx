import React, { useState } from "react";
import "../Navbar.css";
import { Link } from "react-router-dom";
const Navbar = ({ moveToDiv }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="main_nav">
        <div className="Navbar bg-[#fff] justify-between flex items-center h-24 lg:w-full">
          <Link to ="/"> <img className="h-[50px] md:h-[80px]" src="/images1/logo 1.svg" alt="" /></Link>      
          <div className={`nav-items pt-3 md:pt-0 flex ${isOpen && "open"}`}>
            <div
              className="nav_items pl-2 md:text-xl md:pr-3 md:py-2"
            >
              Home
            </div>
            <div
              className="nav_items text-xl pr-2 pl-2 py-2"
            >
              Interactive Map
              <img className="arrow" src="/images/dropimg.svg" alt="" />
            </div>
            <div
              className="nav_items text-xl pr-3 pl-2 py-2"
            >
             Locations
            </div>
            <div
              className="nav_items text-xl pr-2 pl-2  py-2"
            >
            Contact Us
            </div>
            <div
              className="nav_items text-xl pr-3 pl-3  py-2"    
            >
            FAQS
            </div>
              <div className="bttn md:ml-0 ml-[13px]" to="/login">
                <button className="login_btn bg-[#165593] text-white w-[124px] mr-3 h-12 md:w-32 rounded-xl ml-5 text-xl">Login</button>
              </div>        
              <div className="bttn md:ml-0 ml-[13px]" to="/login">
                <button className="signup_btn outline-none primary2 bg-[#fff] h-12 w-[124px] md:w-32 text-xl rounded-xl">
                Sign up
                </button>
              </div>   
          </div>
          <div
            className={`nav-toggle ${isOpen && "open"}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="bar"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
