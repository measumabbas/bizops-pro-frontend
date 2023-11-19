import { LinksFunction } from '@remix-run/node';
import navbarStyles from '~/styles/navbar.css';
import Logo from '../navbar/images/logo.png';
import { Link } from '@remix-run/react';
import { NavLink } from '@remix-run/react';
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
            <NavLink className={({ isActive, isPending }) =>
              isPending ? 'pending' : isActive ? 'active' : ''
            } to='/landingpage/home'><li>Home</li></NavLink>
            <NavLink className={({ isActive, isPending }) =>
              isPending ? 'pending' : isActive ? 'active' : ''
            } to="/landingpage/features"><li>Features</li></NavLink>
            <NavLink className={({ isActive, isPending }) =>
              isPending ? 'pending' : isActive ? 'active' : ''
            } to="/landingpage/pricing"><li>Pricing</li></NavLink>
            <NavLink className={({ isActive, isPending }) =>
              isPending ? 'pending' : isActive ? 'active' : ''
            } to="/landingpage/about"><li>About</li></NavLink>
            <NavLink className={({ isActive, isPending }) =>
              isPending ? 'pending' : isActive ? 'active' : ''
            } to="/landingpage/blog"><li>Blog</li></NavLink>
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
