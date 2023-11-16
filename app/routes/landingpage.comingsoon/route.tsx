import { LinksFunction } from '@remix-run/node';
import Logo from '~/images/logo.png';
import Shuttle from '~/images/shuttle.png';
import comingSoonStyles from '~/styles/comingsoon.css';

export const links: LinksFunction = () =>[
  {
    rel:'stylesheet', href: comingSoonStyles
  }
];

const ComingSoon = () => {
  return (
    <div className="max-width-1440 coming-soon">
      <div className="coming-soon-inner">
        <img src={Logo} alt="Logo" className="logo" />
        <h1 className="coming-soon-heading">Coming Soon</h1>
        <div className="para-img">
          <p className="paragraphs coming-soon-para">Taking solopreneurs and small businesses to next level</p>
          <img src={Shuttle} alt="Shuttle" />
        </div>
        <span className="register-early">Register for early access</span>
        <div className="inputs">
          <input type="text" name="name" id="name" placeholder='Full Name' />
          <input type="email" name="email" id="email" placeholder='Enter your email' />
        </div>
        <div className="check-label">
          <input type="checkbox" name="" id="" />
          <label htmlFor="checkbox">Send newsletter and maketing emails</label>
        </div>
        <button type="submit">Get notified</button>
      </div>
    </div>
  );
};

export default ComingSoon;