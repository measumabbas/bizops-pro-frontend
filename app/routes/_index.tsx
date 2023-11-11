import type { MetaFunction,LinksFunction } from '@remix-run/node';
import globalStyles from '~/styles/global.css';
export const meta: MetaFunction = () => {
  return [
    { title: 'Bizops-pro' },
    { name: 'description', content: 'Welcome to Bizops-pro!' },
  ];
};

export const links:LinksFunction = ()=>{
  return[
    {
      rel:'stylesheet',href:globalStyles
    }
  ];
};


export default function Index() {
  return (
    <div>
      <h1>Homepage</h1>
    </div>
  );
}
