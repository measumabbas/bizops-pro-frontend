import type { MetaFunction,LinksFunction } from '@remix-run/node';
import globalStyles from '~/styles/global.css';
import homeStyles from '~/styles/home.css';
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
    }
  ];
};


export default function Index() {
  return (
    <div>
      <h1>Homepage</h1>
      <h2>From home styles</h2>
    </div>
  );
}
