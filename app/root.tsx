import { cssBundleHref } from '@remix-run/css-bundle';
import type { LinksFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
];

function Document ({children,title}:{children:React.ReactNode,title:string}){
  return (
    <html lang='en'>
      <head>
        <Meta/>
        <title>{title}</title>
        <Links/>
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
} 
export default function App() {
  return (
    <Document title='Bizops pro'>
      <Outlet/>
    </Document>
  );
}

