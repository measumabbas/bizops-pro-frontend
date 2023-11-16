import type { LoaderFunction } from '@remix-run/node';
import { redirect } from '@remix-run/node';

export const loader:LoaderFunction = ()=>{
  return redirect('/landingpage/home');
};


import type { LinksFunction, MetaFunction } from '@remix-run/node';
import ComingSoon from './landingpage.comingsoon/route';
import comingSoonStyles from '~/styles/comingsoon.css';

export const meta: MetaFunction = () => {
  return [
    { title: 'Bizops-pro' },
    { name: 'description', content: 'Welcome to Bizops-pro!' },
    {name:'viewport', content:'width=device-width, initial-scale=1.0'}
  ];
};

export const links:LinksFunction = ()=>[{
  rel: 'stylesheet', href: comingSoonStyles
}];


export default function Index() {
  return (
    <div>
      <ComingSoon />
    </div>
  );
}
