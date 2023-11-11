// import React from 'react';
import { LinksFunction } from '@remix-run/node';
import Logo from '~/images/logo.png';
import FbImg from '~/images/fb.png';
import InstaImg from '~/images/insta.png';
import LinkedInImg from '~/images/linkedIn.png';

import homeStyles from '~/styles/home.css';

export const links: LinksFunction = ()=>{
  return[
    {
      rel:'stylesheet',href:homeStyles
    }
  ];
};
const Footer = () => {
  return (
    <footer>
      <section className="section7 max-width-1440">
        <div className="sec7-inner">
          <img src={Logo} alt="" />
          <div className="sec7-middle">
            <div className="first-col">
              <a href="#">How it works?</a>
              <a href="#">Help Center</a>
              <a href="#">Privacy Policy</a>
            </div>
            <div className="second-col">
              <a href="#">About Us</a>
              <a href="#">FAQ</a>
              <a href="#">Terms & Conditions</a>
            </div>
          </div>
          <div className="sec7-right">
            <span className="follow">Follow Us</span>
            <div className="social-icons">
              <a href="#">
                <img src={FbImg} alt="" />
              </a>
              <a href="#">
                <img src={InstaImg} alt="" />
              </a>
              <a href="#">
                <img src={LinkedInImg} alt="" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="max-width-1440">
        <div className="footer-inner">
          <span className="footer-span">BizOps Pro All Rights Reserved</span>
        </div>
      </footer>
    </footer>
  );
};

export default Footer;
