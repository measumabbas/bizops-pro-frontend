import { LinksFunction } from '@remix-run/node';
import Logo from '~/images/logo.png';
import Shuttle from '~/images/shuttle.png';
import comingSoonStyles from '~/styles/comingsoon.css';
import ButtonLoader from '~/components/ButtonLoader/ButtonLoader';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useForm, SubmitHandler } from "react-hook-form"

export const links: LinksFunction = () =>[
  {
    rel:'stylesheet', href: comingSoonStyles
  }
];

const ComingSoon = () => {

    const {
       register,
      handleSubmit,
      formState: { errors },
    } = useForm();

  const [loading,setLoading] = useState(false);
  const form = useRef();

  
  const sendEmail = () => {
    setLoading(true);
    emailjs.sendForm('service_j7i6aqp', 'template_qjjoyr4', form.current, 'fVr5Vry6KGPvw4f9U')
      .then((result) => {
        setLoading(false);
        alert('Email Has been sent successfully');
          
      }, (error) => {
        setLoading(false);
        alert('Some Error Occured please Try Again');
      });
  };

  return (
    <div className="max-width-1440 coming-soon">
      <div className="coming-soon-inner">
        <img src={Logo} alt="Logo" className="logo" />
        <h1 className="coming-soon-heading">Coming Soon</h1>
        <div className="para-img">
          <p className="paragraphs coming-soon-para">Taking solopreneurs and small businesses to next level</p>
          <img src={Shuttle} alt="Shuttle" />
        </div>
        <span className="register-early">Register for early access</span>
        <form ref={form} onSubmit={handleSubmit(sendEmail)}>
          <div className="inputs">
            <input type="text" placeholder='Full Name' {...register('user_name',{required:true})}/>
            <input type="email" placeholder='Enter your email' {...register('user_email',{required:true})} />
          </div>
          <div className="check-label">
            <input type="checkbox" name="" id="" />
            <label htmlFor="checkbox">Send newsletter and maketing emails</label>
          </div>
          <button type="submit"> {
            loading ? <ButtonLoader/> : 'Get notified'
          }</button>
        </form>
        
      </div>
    </div>
  );
};

export default ComingSoon;