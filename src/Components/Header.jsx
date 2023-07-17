import React from "react";
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from "../assets/images/apneck.png";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Blog from "../pages/Blog";
import About from "../pages/About";
import Contact from "../pages/Contact";

const Header = () => {
  return (
    <>
      <header className="header-top-strip p-1 shadow-sm">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-6">
              <p>The Trending Outfitsat 100% off</p>
            </div>
            <div className="col-6 d-flex justify-content-between">
              <div>
                <a href="tel:+245786538">Call Us +245786538</a>
              </div>
              <div>
                <Link>
                  <BiPhoneCall className="fs-3 mx-4" />
                </Link>
                <Link>
                  <AiOutlineMail className="fs-3 mx-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      <header className="header-upper">
        <div className="container-xxl">
          <div className="row">
            <div className="col-2">
              <Link to='/'>
                <img src={logo} alt="" className="img fluid logo" />
              </Link>
            </div>
            <div className="col-5 d-flex align-items-center justify-content-between">
              <Link to={'/'}>Home</Link>
              <Link to={'shop'}>Shop</Link>
              <Link to={'blog'}>Blog</Link>
              <Link to={'about'}>About</Link>
              <Link to={'contact'}>Contact</Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
