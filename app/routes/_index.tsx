import type { MetaFunction,LinksFunction } from '@remix-run/node';
import Navbar from '~/components/navbar/Navbar';
import Home from '~/routes/home/Home';
import globalStyles from '~/styles/global.css';
import homeStyles from '~/styles/home.css';
import navbarStyles from '~/styles/navbar.css';
import aboutStyles from '~/styles/about.css';
import pricingStyles from '~/styles/pricing.css';
import blogStyles from '~/styles/blog.css';
import About from './about/route';
import Footer from '~/components/footer/Footer';
import Pricing from './pricing/Pricing';
import Blog from './blog/Blog';

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
      <Blog />
      <Footer />
    </div>
  );
}
