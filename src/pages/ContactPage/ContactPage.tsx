import React from 'react'
import "./contactPage.css"
import { Footer, Navbar } from "../../components";
import { Link } from 'react-router-dom';
import { CiMail, CiPhone, CiMapPin } from "react-icons/ci";


type Props = {}

const ContactPage = (props: Props) => {
  return (
    <>
      <Navbar />
      <div className='contact'>
        <div className='contact-form'>
          <h1>Contact Us</h1>
          <p>Lorem ipsum dolor sit amet.</p>
          <div id='contact-container'>
            <div className='contact-info'>
            <h4>Contact Information</h4>
              <p>text</p>
              <div className='icon-text'>
                <i className='icon' aria-hidden="true"><CiPhone /></i>
                <span>(0216) 331 48 00</span>
              </div>
              <div className='icon-text'>
                <i className='icon' aria-hidden="true"><CiMail /></i>
                <span>info@tobeto.com</span>
              </div>
              <div className='icon-text'>
                <i className='icon' aria-hidden="true"><CiMapPin /></i>
                <span>Kavacık, Rüzgarlıbahçe Mah. Çampınarı Sok. No:4 Smart Plaza B Blok Kat:3 34805, Beykoz,İstanbul</span>
              </div>
              <div className='social-media'>
                <Link to="" className='icon-circle'>
                  <i className='icon'></i>
                </Link>
              </div>
            </div>
            <form>
              
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ContactPage