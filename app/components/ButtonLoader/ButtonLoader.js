import React from 'react';
// import { LinksFunction } from '@remix-run/node';
// import buttonLoaderStyles from '~/styles/buttonloader.css';
import './buttonloader.css';

// export const links: LinksFunction = () =>[
//   {
//     rel:'stylesheet', href: buttonLoaderStyles
//   }
// ];
const ButtonLoader = () => {
  return (
    <div class="spinner"></div>
  );
};

export default ButtonLoader;