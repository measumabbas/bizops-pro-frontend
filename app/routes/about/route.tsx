import { LinksFunction } from '@remix-run/node';
import React from 'react';
// import Navbar from '~/components/navbar/Navbar';
import aboutStyles from '~/styles/about.css';
import AboutImg from './images/aboutImg.png';

export const links: LinksFunction = ()=>{
  return[
    {
      rel:'stylesheet',href:aboutStyles
    }
  ];
};
const About = () => {
  return (
    <div className='max-width-1440 about-page'>
      <section className="section1">
        <img src={AboutImg} alt="" />
      </section>
      <section className="section2">
        <div className="sec2-inner">
          <h1 className="headings sec2-heading">Our Mission</h1>
          <p className="sec2-para1 para">At BizOps Pro, we're on a mission to empower service providers and businesses to thrive in the digital age. With our cutting-edge software solutions, we enable you to take control of every aspect of your business, from scheduling and invoicing to collecting payments and establishing a strong online presence.</p>
          <p className="sec2-para2 para">Our team of dedicated professionals is passionate about simplifying the complexities of running a service-based business. We understand the unique challenges you face, and we've designed our software to be your ultimate partner in success.</p>
        </div>
      </section>
    </div>
  );
};

export default About;
