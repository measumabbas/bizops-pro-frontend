import { LinksFunction } from '@remix-run/node';
import featuresStyles from '~/styles/features.css';
import BookingImg from '~/images/appointment 1.png';
import ClientImg from '~/images/clientMng.png';
import CommunicationImg from '~/images/communication.png';
import IntegrationImg from '~/images/integration 1.png';
import PaymentImg from '~/images/payment.png';
import MarketingImg from '~/images/marketing.png';

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
        <div className="features-cards">
          <div className="features-card">
            <div className="image-appoinment">
              <img src={BookingImg } alt="" />
              <p className='appointment-heading'>Appointments and Bookings</p>
            </div>
            <ul className='list-items'>
              <li>Appointments and Bookings</li>
              <li>Customer login and profiles</li>
              <li>Book via Instagram</li>
              <li>Text message appointment reminders</li>
              <li>Book via Facebook</li>
            </ul>
          </div>

          <div className="features-card">
            <div className="image-appoinment">
              <img src={ClientImg} alt="" />
              <p className='appointment-heading'>Client Management</p>
            </div>
            <ul className='list-items'>
              <li>View customer profiles</li>
              <li>Custom Forms</li>
              
            </ul>
          </div>

          <div className="features-card">
            <div className="image-appoinment">
              <img src={CommunicationImg} alt="" />
              <p className='appointment-heading'>Communication</p>
            </div>
            <ul className='list-items'>
              <li>Appointment confirmation, cancellation emails</li>
              <li>'Contact Us' feature on custom website</li>
              
            </ul>
          </div>

          <div className="features-card">
            <div className="image-appoinment">
              <img src={IntegrationImg} alt="" />
              <p className='appointment-heading'>Integrations</p>
            </div>
            <ul className='list-items list-diplay'>
              <div className="fisrt-line">
                <li>Quickbook</li>
                <li>Zero</li>
              </div>
              <div className="second-line">
                <li>Google</li>
                <li>Outlook</li>
              </div>
            </ul>
          </div>

          <div className="features-card">
            <div className="image-appoinment">
              <img src={PaymentImg} alt="" />
              <p className='appointment-heading'>Payment Processing</p>
            </div>
            <ul className='list-items'>
              <li>Appointment deposits</li>
              <li>Cardless checkout</li>
              <li>Online payments via third parties</li>
              <li>Invoices</li>
            </ul>
          </div>
          <div className="features-card">
            <div className="image-appoinment">
              <img src={MarketingImg} alt="" />
              <p className='appointment-heading'>Marketing</p>
            </div>
            <ul className='list-items'>
              <li>Gather customer reviews</li>
              <li>Custom website</li>
              <li>Coupons & Promotion codes</li>
              <li>Portolio /feed from instagram</li>
            </ul>
          </div>



        </div>
      </div>
    </div>
  );
};

export default Features;