import React from 'react';
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer className="footer p-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4 d-flex flex-column">
              <h3 className="mb-5">Contact Us</h3>
              <div className="footer-details">
                <p className="mb-3">
                  <b>Address:</b> Thika town, Nultex building, 2nd floor.
                </p>
                <p className="mb-3">
                  <b>Phone:</b> <a href="tel:+245786538">Call Us +245786538</a>
                </p>
                <p className="mb-5">
                  <b>Hours Open:</b> From 8 A.M. to 5 P.M.
                </p>
                <p className="mb-3">
                  <b>Follow Us</b>
                </p>
                <div className="col-4 social-icons d-flex justify-content-around">
                  <Link>
                    <AiFillTwitterCircle className='fs-4'/>
                  </Link>
                  <Link>
                    <BsFacebook className='fs-4'/>
                  </Link>
                  <Link>
                    <BsInstagram className='fs-4'/>
                  </Link>
                  <Link>
                    <BsLinkedin className='fs-4'/>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </footer>
    </>
  );
}

export default Footer;