import type { MetaFunction,LinksFunction } from '@remix-run/node';
import Navbar from '~/components/navbar/Navbar';
import globalStyles from '~/styles/global.css';
import homeStyles from '~/styles/home.css';
import navbarStyles from '~/styles/navbar.css';
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
    }
  ];
};


export default function Index() {
  return (
    <div>
      <Navbar />
    </div>
  );
}
