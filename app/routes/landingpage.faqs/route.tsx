import { LinksFunction } from '@remix-run/node';
import React from 'react';

import faqsStyles from '~/styles/faqs.css';

export const links: LinksFunction = () =>[
  {
    rel: 'stylesheet', href:faqsStyles
  }
];

const Faqs = () => {
  return (
    <div className="faqs max-width-1440">
      <div className="faqs-inner">
        <h1 className="headings faqs-heading">Terms and Conditions for BizOps Pro Business Management and Scheduling Platform</h1>
        <div className="select-lang">
          <span>Choose Language</span>
          <select id="lang-selection">
            <option value="English">English</option>
            <option value="English">English</option>
          </select>
        </div>
        <div className="terms-conditions">
          <p className='terms-conditions-paras'>These Terms and Conditions ("Agreement") govern the use of the BizOps Pro business management and scheduling platform (the "Platform") provided by [Your Company Name] ("we," "our," or "us"). By accessing or using the Platform, you agree to be bound by these terms and conditions. If you do not agree to these terms, please do not use the Platform.</p>
          <div className="head-para">
            <h3 className="mini-heading">Acceptance Terms</h3>
            <p className="acceptance-terms conditions-paras">By using the Platform, you affirm that you are at least 18 years old and capable of entering into a legally binding agreement. If you are using the Platform on behalf of a business, you represent and warrant that you have the authority to bind the business to these terms.</p>
          </div>
          <div className="head-para">
            <h3 className="mini-heading">User Registration</h3>
            <ol >
              <li className='user-reg'><span className="mini-heading">Account Creation:</span>Account Creation: To use the Platform, you must create an account by providing accurate and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</li>
              <li className='user-reg'><span className="mini-heading">Account Verification:</span>We may require verification of your identity and contact information. You agree to cooperate in this process and provide necessary documents as requested.</li>
            </ol>
          </div>

          <div className="head-para">
            <h3 className="mini-heading">Platform Usage</h3>
            <ol>
              <li className='usage'><span className="mini-heading">Permitted Use:</span>The Platform is intended for legitimate business management and scheduling purposes only. You may not use the Platform for any illegal, harmful, or unethical activities.</li>
              <li className='usage'><span className="mini-heading">Prohibited Activities: You may not:</span>
                <ol className='plateform-usage'>
                  <li>Violate any applicable laws or regulations.</li>
                  <li>Share your account credentials with others.</li>
                  <li>Upload or transmit any content that is offensive, defamatory, or infringing on intellectual property rights</li>
                  <li>Attempt to gain unauthorized access to the Platform or its systems.</li>
                </ol>
              </li>
            </ol>
          </div>
          <div className="head-para">
            <h3 className='mini-heading'>Fees and Payments</h3>
            <ol>
              <li className='fee-payment'><span className="mini-heading">Subscription Fees:</span>The use of the Platform may be subject to subscription fees. You agree to pay the applicable fees as per the pricing plan you choose.</li>
              <li className='fee-payment'><span className="mini-heading">Payment Processing:</span>Payment processing services are provided by third-party payment processors. We do not collect or store your payment information. You agree to their terms and conditions when making payments.</li>
            </ol>
          </div>
          <div className="head-para">
            <h3 className='mini-heading'>Data Privacy</h3>
            <ol>
              <li className='data-privacy'><span className="mini-heading">Data Collection:</span>We collect and store information you provide during registration and while using the Platform. Your data is subject to our Privacy Policy, which you should review for more information.</li>
              <li className='data-privacy'><span className="mini-heading">Data Security:</span>We implement industry-standard security measures to protect your data, but we cannot guarantee its absolute security. You are responsible for maintaining the security of your account.</li>
            </ol>
          </div>
          <div className="head-para">
            <h3 className='mini-heading'>Intellectual Property</h3>
            <ol>
              <li className='intellectual-property'><span className="mini-heading">Ownership:</span>We retain all rights, title, and interest in the Platform and its content. You do not acquire any ownership rights to the Platform or its components.</li>
              <li className='intellectual-property'><span className="mini-heading">License:</span>We grant you a non-exclusive, non-transferable license to use the Platform solely for your business management and scheduling purposes.</li>
            </ol>
          </div>
          <div className="head-para">
            <h3 className='mini-heading'>Termination</h3>
            <p className="conditions-paras termination">We may terminate or suspend your access to the Platform at our sole discretion, with or without cause. You may also terminate your account by providing written notice to us. Upon termination, your account and access to the Platform will be deactivated.</p>
          </div>
          <div className="head-para">
            <h3 className='mini-heading'>Disclaimer of Warranties</h3>
            <p className="conditions-paras warranties">The Platform is provided "as is" and "as available" without warranties of any kind, either express or implied. We do not warrant that the Platform will be error-free, uninterrupted, or meet your specific requirements.</p>
          </div>
          <div className="head-para">
            <h3 className='mini-heading'>Limitation of Liability</h3>
            <p className="conditions-paras limitations">To the fullest extent permitted by law, we shall not be liable for any direct, indirect, incidental, consequential, or special damages arising from or in connection with the use of the Platform or this Agreement.</p>
          </div>
          <div className="head-para">
            <h3 className='mini-heading'>Governing Law and Dispute Resolution</h3>
            <p className="conditions-paras laws">This Agreement is governed by the laws of [Your Jurisdiction]. Any disputes arising from this Agreement shall be resolved through arbitration in accordance with the rules of the [Arbitration Organization] in [City, State], and the prevailing party shall be entitled to recover its reasonable attorney's fees and costs.</p>
          </div>
          <div className="head-para">
            <h3 className='mini-heading'>Modifications</h3>
            <p className="conditions-paras modifications">We reserve the right to modify these terms and conditions at any time. Any changes will be posted on the Platform, and it is your responsibility to review and accept the updated terms.</p>
          </div>
          <div className="head-para">
            <h3 className='mini-heading'>Contact Information</h3>
            <p className="conditions-paras contact">If you have any questions or concerns regarding this Agreement, please contact us at [Your Contact Information].</p>
          </div>
          <p className="condition-last-para conditions-paras">By using the Platform, you acknowledge that you have read, understood, and agreed to these Terms and Conditions.</p>
        </div>
      </div>
    </div>
  );
};

export default Faqs;