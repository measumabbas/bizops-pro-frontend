import { LinksFunction } from '@remix-run/node';
import { Outlet } from '@remix-run/react';
import Footer from '~/components/footer/Footer';
import Navbar from '~/components/navbar/Navbar';
import homeStyles from '~/styles/home.css';
import navbarStyles from '~/styles/navbar.css';

export const links:LinksFunction = ()=>{
  return[
    {
      rel:'stylesheet',href:homeStyles
    },
    {
      rel:'stylesheet',href:navbarStyles
    }
  ];
};
const LandingPage = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  );
};

export default LandingPage;
