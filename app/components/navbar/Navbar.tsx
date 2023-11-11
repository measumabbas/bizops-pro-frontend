import { LinksFunction } from '@remix-run/node';
import navbarStyles from '~/styles/navbar.css';
import Logo from '../navbar/images/logo.png';

export const links: LinksFunction = () => [
  {
    rel: 'stylesheet',
    href: navbarStyles,
  },
];
export default function Navbar() {
  return (
    <div>
      <header className="max-width-1440">
        <nav className="navbar">
          <div className="header-logo">
            <a href="#"><img src={Logo} alt="" /></a>
          </div>
          <ul className="nav-links">
            <a id="active" href="#"><li>Home</li></a>
            <a href="#"><li>Features</li></a>
            <a href="#"><li>Pricing</li></a>
            <a href="#"><li>About</li></a>
            <a href="#"><li>Blog</li></a>
          </ul>
          <div className="contact-login-btn">
            <button className="contact">Contact Us</button>
            <a href="#">Login</a>
          </div>
        </nav>
      </header>
    </div>
  );
}
