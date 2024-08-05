import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import './Contact.css'
import Navbar from '../Home/Navbar';
import Footer from '../Footer/Footer';

const Contact = () => {
  return (
    <>
    <Navbar/>
    <div  className='contact'>
      <p>Contact</p>
    </div>
    <div className='contact-us'>
        <form  className='contact-form'  action="">
            <h1>Send Us A Message</h1>
            <input required id='contact-email' placeholder='Your email address' type="email" />
            <input id='contact-message' required placeholder='message' type="message" />
            <button id='contact-btn'>Submit</button>

        </form>
        <div className='contact-detail'>
            <div className='contact-address'>
              <div className='contact-icon'>
              <CiLocationOn />
                <h2 > Addrress</h2>
                </div>
                <p>Coza Store Center 8th floor, 379 Hudson St, New York, NY 10018 US</p>
            </div>
            <div className='contact-talk'>
            <div className='contact-icon'>
            <IoCallOutline />
               <h2>Lets talk</h2>
               </div>
               <p> +91 22525224586</p>
            </div>
            <div className='contact-support'>
            <div className='contact-icon'>
              <TfiEmail />
               <h2>  sale support</h2>
               </div>

                <p> contact@example.com</p>
            </div>
             
        </div>

    </div>

    <div className='contact-map'>
  <iframe className='contact-maps'
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229085.7894335258!2d78.02573775243265!3d26.214061512876007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c5d1792291fb%3A0xff4fb56d65bc3adf!2sGwalior%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1717263015266!5m2!1sen!2sin"
    // width="100%"
    // height="50vh"
    
    
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Google Map"
  ></iframe>
    </div>
    <Footer/>
    </>
  )
}

export default Contact
