
import { LinksFunction } from '@remix-run/node';
import contactStyles from '~/styles/contact.css';

// import contactImg from '~/images/contactImg.png';
import Logo from '~/images/logo.png';
import ProfileImg from '~/images/profile.png';
import PhoneImg from '~/images/call-outgoing.png';
import MessageImg from '~/images/sms-edit.png';

export const links: LinksFunction = () =>[
  {
    rel:'stylesheet', href: contactStyles
  }
] ;

const Contact = () => {
  return (
    <div className="max-width-1440 contact">
      <div className="contact-inner">
        {/* <div className="contact-left">
          <img src={contactImg} alt="Contact Image" />
        </div> */}
        <div className="contact-form">
          <div className="logo">
            <img src={Logo} alt="Logo" />
          </div>
          
          <h2 className="getInTouch">Get in Touch with Us</h2>
          <form action="">
            <div className="label-input">
              <label htmlFor="firstName">First Name *</label>
              <div className="icon-input">
                <img src={ProfileImg} alt="" />
                <input type="text" name="firstName" id="firstName" placeholder='Muhammad' />
              </div>
              
            </div>
            <div className="label-input">
              <label htmlFor="surname">Surname *</label>
              <div className="icon-input">
                <img src={ProfileImg} alt="" />
                <input type="text" name="surname" id="surname" placeholder='Iqbal' />
              </div>
            </div>
            <div className="label-input">
              <label htmlFor="email">Email*</label>
              <div className="icon-input">
                <img src={MessageImg} alt="" />
                <input type="email" name="email" id="email" placeholder='m.iqbal@gmail.com' />
              </div>
            </div>
            <div className="label-input">
              <label htmlFor="phone">Phone *</label>
              <div className="icon-input">
                <img src={PhoneImg} alt="" />
                <input type='number' maxLength={11} name="phone" id="phone" placeholder='03000000000' />
              </div>
            </div>
            <div className="label-input">
              <label htmlFor="message">Message</label>
              <div className="icon-textarea">
                <img src={MessageImg} alt="" />
                <textarea name="message" id="message" rows={3} cols={67} placeholder='m.iqbal@gmail.com'></textarea>
                {/* <input type='text' name="message" id="message" /> */}
              </div>
            </div>
            <button className='contactus-btn' type="submit">Continue</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;