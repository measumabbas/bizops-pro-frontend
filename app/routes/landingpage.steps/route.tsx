import { LinksFunction } from '@remix-run/node';
import stepsStyles from '~/styles/steps.css';
import { ChevronUp } from 'react-feather';
export const links:LinksFunction = ()=>[
  {
    rel:'stylesheet',href:stepsStyles
  }
];
const Steps = () => {

  
  return (
    <>
      <div className="max-width-1440 steps-container">
        <div className="steps-container-inner">
          <div className='steps-main-headings'>
            <h1 className="headings mb-10">
            How It Works
            </h1>
            <p className='paragraphs'>Get started with taking your business to the next level in 3 simple steps.</p>
          </div>

          <div className="steps-container-steps">
            <div className="steps-container-step">
              <div className="circle">
                <span>1</span>
              </div>
              <h2>Choose Your Package</h2>
              <p className='paragraphs'>Browse our range of flexible packages.  We have three to select from Scaling Por, Super Pro and Supreme Pro.  CLICK HERE for more information on each.</p>
            </div>
            <div className="steps-container-step">
              <div className="circle">
                <span>2</span>
              </div>
              <h2>Select Website Template</h2>
              <p className='paragraphs'>Select from a range of website templates to make your own.  Each can be easily edited to fit your brand and style.</p>
            </div>
            <div className="steps-container-step">
              <div className="circle">
                <span>3</span>
              </div>
              <h2>Get Back To Buisness</h2>
              <p className='paragraphs'>Start accepting booking,s, growing your business and pushing your brand with ease and efficiency.</p>
            </div>
          </div>

        
        </div>
       
      </div>
      <div className="steps-faqs max-width-1440">
        <div className="steps-faqs-inner">
          <h1 className="faq-head">Frequently Asked Questions</h1>
        
          <div className="steps-faq">
            <div className="steps-faq-head">
              <p>What services do you offer?</p>
              <div className="step-chevron">
                <ChevronUp/>
              </div>
            </div>
            <div className="steps-faq-content">
              <p className='paragraphs'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text since the 1500s</p>
            </div>
          </div>
          <div className="steps-faq">
            <div className="steps-faq-head">
              <p>What services do you offer?</p>
              <div className="step-chevron">
                <ChevronUp/>
              </div>
            </div>
            <div className="steps-faq-content">
              <p className='paragraphs'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text since the 1500s</p>
            </div>
          </div>
          <div className="steps-faq">
            <div className="steps-faq-head">
              <p>What services do you offer?</p>
              <div className="step-chevron">
                <ChevronUp/>
              </div>
            </div>
            <div className="steps-faq-content">
              <p className='paragraphs'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text since the 1500s</p>
            </div>
          </div>
          <div className="steps-faq">
            <div className="steps-faq-head">
              <p>What services do you offer?</p>
              <div className="step-chevron">
                <ChevronUp/>
              </div>
            </div>
            <div className="steps-faq-content">
              <p className='paragraphs'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text since the 1500s</p>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Steps;
