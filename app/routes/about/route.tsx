import { LinksFunction } from '@remix-run/node';
import React from 'react';
import aboutStyles from '~/styles/about.css';

export const links: LinksFunction = ()=>{
  return[
    {
      rel:'stylesheet',href:aboutStyles
    }
  ];
};
const About = () => {
  return (
    <div>
      <h3>This is about page</h3>
    </div>
  );
};

export default About;
