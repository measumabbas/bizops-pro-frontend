// import React from "react";

import HomeImg1 from '~/images/home1.png';
import AppoinmentsImg from '~/images/appointment 1.png';
import IntegrationImg from '~/images/integration 1.png';
import ClientMngmentImg from '~/images/clientMng.png';
import PaymentImg from '~/images/payment.png';
import CommunicationImg from '~/images/communication.png';
import MarketingImg from '~/images/marketing.png';
import Template1Img from '~/images/template1.png';
import Template2Img from '~/images/template2.png';
import Template3Img from '~/images/template3.png';
import QuotationImg1 from '~/images/qouts.png';
import QuotationImg2 from '~/images/quot2.png';
import TestimonialImg1 from '~/images/testimg1.png';
import TestimonialImg2 from '~/images/testimg2.png';
import PngLogo from '~/images/pngLogo.png';
import TrailImg from '~/images/trailImg.png';
import { LinksFunction } from '@remix-run/node';
import homeStyles from '~/styles/home.css';

export const links:LinksFunction = ()=>{
  return[{

    rel:'stylesheet',href:homeStyles
  }
  ];
};

const Home = () => {
  return (
    <div>
      <section className="section1 max-width-1440">
        <div className="section1-inner">
          <div className="section1-left">
            <h1 className="main-heading">
              Business management and scheduling software
            </h1>
            <h2 className="semi-heading">
              taking solopreneurs & small businesses to the next level
            </h2>
            <p className="sec1-para">
              BizOps Pro all in one software reduces the day to day hassles of
              managing a small business, allowing you to spend more time
              providing a superior customer experience, earn more money and
              build your brand with ease and efficiency.
            </p>
            <button className="trail-button">Get a free trial</button>
          </div>
          <img src={HomeImg1} alt="" />
        </div>
      </section>

      <section className="section2 max-width-1440">
        <div className="section2-inner">
          <h1 className="sec2-heading headings">Business Types</h1>
          <div className="sec2-cards">
            <div className="sec2-card" id="card1">
              <div className="overlay">
                <h1 className="sec2-card-head">BEAUTY AND WELLNESS</h1>
              </div>
              <div className="after-hover">
                <h1 className="sec2-card-head-hover">BEAUTY AND WELLNESS</h1>
                <p className="sec2-card-para-hover">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text since the 1500s
                </p>
                <button className="sec2-card-btn-hover">contact us</button>
              </div>
            </div>
            <div className="sec2-card" id="card2">
              <div className="overlay">
                <h1 className="sec2-card-head">BEAUTY AND WELLNESS</h1>
              </div>
              <div className="after-hover">
                <h1 className="sec2-card-head-hover">BEAUTY AND WELLNESS</h1>
                <p className="sec2-card-para-hover">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text since the 1500s
                </p>
                <button className="sec2-card-btn-hover">contact us</button>
              </div>
            </div>
            <div className="sec2-card" id="card3">
              <div className="overlay">
                <h1 className="sec2-card-head">BEAUTY AND WELLNESS</h1>
              </div>
              <div className="after-hover">
                <h1 className="sec2-card-head-hover">BEAUTY AND WELLNESS</h1>
                <p className="sec2-card-para-hover">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text since the 1500s
                </p>
                <button className="sec2-card-btn-hover">contact us</button>
              </div>
            </div>
            <div className="sec2-card" id="card4">
              <div className="overlay">
                <h1 className="sec2-card-head">BEAUTY AND WELLNESS</h1>
              </div>
              <div className="after-hover">
                <h1 className="sec2-card-head-hover">BEAUTY AND WELLNESS</h1>
                <p className="sec2-card-para-hover">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text since the 1500s
                </p>
                <button className="sec2-card-btn-hover">contact us</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section3 max-width-1440">
        <div className="sec3-inner">
          <h1 className="headings sec3-heading">Features</h1>
          <p className="sec3-para">
            Everything needed to manage your business wrapped up in one solution
          </p>
          <div className="sec3-features-cards">
            <div className="sec3-features-cards-left">
              <div className="sec3-feature-card-large">
                <div className="feature-card-head">
                  <div className="card-icon">
                    <img src={AppoinmentsImg} alt="" />
                  </div>
                  <div className="card-heading">Appointments and Bookings</div>
                </div>
                <ul className="card-list">
                  <li>Appointment calendar</li>
                  <li>Customer login and profiles</li>
                  <li>Book via Instagram</li>
                  <li>Text message appointment reminders</li>
                  <li>Book via Facebook</li>
                  <li>Customer inte</li>
                </ul>
              </div>
              <div className="sec3-feature-card-large" id="feature-card1">
                <div className="feature-card-head">
                  <div className="card-icon">
                    <img src={IntegrationImg} alt="" />
                  </div>
                  <div className="card-heading">Integrations</div>
                </div>
                <ul className="feature-smallcard">
                  <div className="card-list-left">
                    <li>Quickbook</li>
                    <li>Zero</li>
                  </div>
                  <div className="card-list-right">
                    <li>Google</li>
                    <li>Outlook</li>
                  </div>
                </ul>
              </div>
            </div>
            <div className="sec3-features-cards-middle">
              <div className="sec3-feature-card-large" id="feature-card2">
                <div className="feature-card-head">
                  <div className="card-icon">
                    <img src={ClientMngmentImg} alt="" />
                  </div>
                  <div className="card-heading">Client Management</div>
                </div>
                <ul className="card-list">
                  <li>View customer profiles</li>
                  <li>Custom Forms</li>
                </ul>
              </div>
              <div className="sec3-feature-card-large" id="feature-card3">
                <div className="feature-card-head">
                  <div className="card-icon">
                    <img src={PaymentImg} alt="" />
                  </div>
                  <div className="card-heading">Payment Processing</div>
                </div>
                <ul className="card-list">
                  <li>Appointment deposits</li>
                  <li>Cardless checkout</li>
                  <li>Online payments via third parties</li>
                  <li>Invoices</li>
                </ul>
              </div>
            </div>
            <div className="sec3-features-cards-right sec3-features-cards-middle">
              <div className="sec3-feature-card-large" id="feature-card2">
                <div className="feature-card-head">
                  <div className="card-icon">
                    <img src={CommunicationImg} alt="" />
                  </div>
                  <div className="card-heading">Communication</div>
                </div>
                <ul className="card-list">
                  <li>Appointment confirmation, cancellation emails</li>
                  <li>'Contact Us' feature on custom website</li>
                </ul>
              </div>
              <div className="sec3-feature-card-large" id="feature-card3">
                <div className="feature-card-head">
                  <div className="card-icon">
                    <img src={MarketingImg} alt="" />
                  </div>
                  <div className="card-heading">Marketing</div>
                </div>
                <ul className="card-list">
                  <li>Custom website</li>
                  <li>Coupons & Promotion codes</li>
                  <li>Portolio /feed from instagram</li>
                  <li>Gather customer reviews</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section4 max-width-1440">
        <div className="sec4-inner">
          <h1 className="sec4-heading headings">Customized Templates</h1>
          <p className="sec4-para paragraphs">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            since the 1500s
          </p>
          <div className="templates">
            <img src={Template1Img} alt="" />
            <img src={Template2Img} alt="" />
            <img src={Template3Img} alt="" />
          </div>
          {/* <img src="./images/pagination.png" alt="" /> */}
        </div>
      </section>

      <section className="section5 max-width-1440">
        <div className="sec5-inner">
          <h1 className="headings sec5-heading">What Our Customers Say</h1>
          <p className="paragraphs sec5-para">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            since the 1500s
          </p>
          <div className="testimonials">
            <div className="testimonial">
              <img className="qouts1" src={QuotationImg1} alt="" />
              <img className="textImg" src={TestimonialImg1} alt="" />
              <img className="pngLogo" src={PngLogo} alt="" />
              <p className="paragraphs testimonials-para">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text since the 1500s Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text since the 1500s
              </p>
              <img className="qouts2" src={QuotationImg2} alt="" />
              <span className="test-client-name">Ali Hashmi</span>
              <span className="test-loc">Google</span>
            </div>
            <div className="testimonial">
              <img className="qouts1" src={QuotationImg1} alt="" />
              <img className="textImg" src={TestimonialImg2} alt="" />
              <img className="pngLogo" src={PngLogo} alt="" />
              <p className="paragraphs testimonials-para">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text since the 1500s Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text since the 1500s
              </p>
              <img className="qouts2" src={QuotationImg2} alt="" />
              <span className="test-client-name">Ali Hashmi</span>
              <span className="test-loc">Google</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section6 max-width-1440">
        <div className="sec6-inner">
          <div className="sec6-left">
            <img src={TrailImg} alt="" />
          </div>
          <div className="sec6-right">
            <h1 className="sec6-heading">Get your 15 Days Free Trial</h1>
            <ul className="sec6-list">
              <li>15 Free bookings</li>
              <li>Scheduling option</li>
              <li>2 offered services</li>
            </ul>
            <button className="sec6-btn">GET STARTED</button>
          </div>
        </div>
      </section>
      {/* <footer>
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
      </footer> */}
    </div>
  );
};

export default Home;
