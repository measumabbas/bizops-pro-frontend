import type { MetaFunction,LinksFunction } from '@remix-run/node';
import Navbar from '~/components/navbar/Navbar';
import Home from '~/routes/home/route';
import globalStyles from '~/styles/global.css';
import homeStyles from '~/styles/home.css';
import navbarStyles from '~/styles/navbar.css';
import aboutStyles from '~/styles/about.css';
import pricingStyles from '~/styles/pricing.css';
import blogStyles from '~/styles/blog.css';
import faqsStyles from '~/styles/faqs.css';
import About from './about/route';
import Footer from '~/components/footer/Footer';
import Pricing from './pricing/route';
import Blog from './blog/route';
import { Outlet } from '@remix-run/react';
import Faqs from './faqs/route';

export const meta: MetaFunction = () => {
  return [
    { title: 'Bizops-pro' },
    { name: 'description', content: 'Welcome to Bizops-pro!' },
  ];
};

export const links:LinksFunction = ()=>{
  return[
    {
      rel:'stylesheet',href:globalStyles,
    },{

      rel:'stylesheet',href:homeStyles
    },{
      rel:'stylesheet',href:navbarStyles
    },{
      rel: 'stylesheet', href: aboutStyles
    },{
      rel: 'stylesheet', href: pricingStyles
    },{
      rel: 'stylesheet', href: blogStyles
    },{
      rel: 'stylesheet', href: faqsStyles
    }
  ];
};


export default function Index() {
  return (
    <div>
      <Navbar />
      {/* <Home /> */}
      {/* <About /> */}
      {/* <Pricing /> */}
      {/* <Blog /> */}
      <Faqs />
      <Outlet/>
      <Footer />
    </div>
  );
}
