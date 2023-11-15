import { LinksFunction } from '@remix-run/node';
import featuresStyles from '~/styles/features.css';

export const links: LinksFunction = () =>[
  {
    rel:'stylesheet', href:featuresStyles
  }
];

const Features = () => {
  return (
    <div className='max-width-1440 features'>
      <div className="features-inner">
        <h1 className="headings features-heading">Features Highlights</h1>
        <p className="paragraphs features-paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text since the 1500s</p>
        
      </div>
    </div>
  );
};

export default Features;