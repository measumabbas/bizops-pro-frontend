// import React from 'react';

import { LinksFunction } from '@remix-run/node';
import pricingStyles from '~/styles/pricing.css';

import ForwardArrow from './images/forwardArrow.png';

export const links: LinksFunction = () => [
  {
    rel: 'stylesheet',
    href: pricingStyles,
  },
];

const Pricing = () => {
  return (
    <div className="max-width-1440 pricing">
      <div className="pricing-inner">
        <h1 className="headings pricing-heading">
          Explore Our Plans And Pricing
        </h1>
        <p className="pricing-para">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          since the 1500s
        </p>
        <div className="pricing-cards">
          <div className="pricing-card">
            <div className="pricing-card-head">
              <h2 className="pricing-card-heading">Scaling Pro</h2>
            </div>
            <div className="pricing-card-items">
              <div className="pricing-card-item">
                <img src={ForwardArrow} alt="Arrow" />
                <span className="item-name">Unlimited Bookings</span>
              </div>
              <div className="pricing-card-item">
                <img src={ForwardArrow} alt="Arrow" />
                <span className="item-name">Admins/Staff 1</span>
              </div>
              <div className="pricing-card-item">
                <img src={ForwardArrow} alt="Arrow" />
                <span className="item-name">
                  Booking widget for social media
                </span>
              </div>
              <div className="pricing-card-item">
                <img src={ForwardArrow} alt="Arrow" />
                <span className="item-name">Customisable Website</span>
              </div>
              <div className="pricing-card-item">
                <img src={ForwardArrow} alt="Arrow" />
                <span className="item-name">Collect user reviews</span>
              </div>
              <div className="pricing-card-item">
                <img src={ForwardArrow} alt="Arrow" />
                <span className="item-name">
                  Payments/ Deposits and tips*(Stripe, Square, paypal) 1.6%+0.30
                </span>
              </div>
              <div className="pricing-card-item">
                <img src={ForwardArrow} alt="Arrow" />
                <span className="item-name">
                  Multiple automatic timezone convesion
                </span>
              </div>
              <div className="pricing-card-item">
                <img src={ForwardArrow} alt="Arrow" />
                <span className="item-name">
                  Personalised communications* (BizOps Pro branding )
                </span>
              </div>
              <div className="pricing-card-item">
                <img src={ForwardArrow} alt="Arrow" />
                <span className="item-name">Connect to Google, Office 365,Outlook,
and iCloud calendars</span>
              </div>
              <div className="pricing-card-item">
                <img src={ForwardArrow} alt="Arrow" />
                <span className="item-name">Reports and analytics</span>
              </div>
            </div>
            <p className="card-msg">
              Optional Add On's' - £10 / per additional staff
            </p>
          </div>
          <div className="pricing-card">
            <div className="pricing-card-head">
              <h2 className="pricing-card-heading">Scaling Pro</h2>
            </div>
            <div className="pricing-card-items">
              <div className="pricing-card-item">
                <img src={ForwardArrow} alt="Arrow" />
                <span className="item-name">Everything included from Scaling Pro  Package</span>
              </div>
              <div className="pricing-card-item">
                <img src={ForwardArrow} alt="Arrow" />
                <span className="item-name">Admins/Staff 2</span>
              </div>
              <div className="pricing-card-item">
                <img src={ForwardArrow} alt="Arrow" />
                <span className="item-name">Unlimited Bookings</span>
              </div>
              <div className="pricing-card-item">
                <img src={ForwardArrow} alt="Arrow" />
                <span className="item-name">Invoicing</span>
              </div>
              <div className="pricing-card-item">
                <img src={ForwardArrow} alt="Arrow" />
                <span className="item-name">Portfolio/Feed from Instagram</span>
              </div>
              <div className="pricing-card-item">
                <img src={ForwardArrow} alt="Arrow" />
                <span className="item-name">Personalised communications* (BizOps Pro branding) </span>
              </div>
              <div className="pricing-card-item">
                <img src={ForwardArrow} alt="Arrow" />
                <span className="item-name">Gift vouchers and coupon codes</span>
              </div>
              <div className="pricing-card-item">
                <img src={ForwardArrow} alt="Arrow" />
                <span className="item-name">Staff Management</span>
              </div>
              <div className="pricing-card-item">
                <img src={ForwardArrow} alt="Arrow" />
                <span className="item-name">Integration with QuickBooks, Zero</span>
              </div>
            </div>
            
          </div>

          <div className="pricing-card">
            <div className="pricing-card-head">
              <h2 className="pricing-card-heading">Scaling Pro</h2>
            </div>
            <div className="pricing-card-items">
              <div className="pricing-card-item">
                <img src={ForwardArrow} alt="Arrow" />
                <span className="item-name">Everything included from Super Pro  Package</span>
              </div>
              <div className="pricing-card-item">
                <img src={ForwardArrow} alt="Arrow" />
                <span className="item-name">Admins/Staff 5</span>
              </div>
              <div className="pricing-card-item">
                <img src={ForwardArrow} alt="Arrow" />
                <span className="item-name">End user logins</span>
              </div>
              <div className="pricing-card-item">
                <img src={ForwardArrow} alt="Arrow" />
                <span className="item-name">Link Removal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
