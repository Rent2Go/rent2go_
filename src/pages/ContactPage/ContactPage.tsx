import React from 'react'
import "./contactPage.css"
import { Footer, Navbar } from "../../components";
import { Link } from 'react-router-dom';
import { CiMail, CiPhone, CiMapPin } from "react-icons/ci";
import { FaLinkedin, FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";
import { Button } from 'react-bootstrap';


type Props = {}

const ContactPage = (props: Props) => {
  return (
    <>
      <Navbar />
      <div className='contact'>
        <div className='contact-form'>
          <h1>Contact Us</h1>
          <div id='contact-container'>
            <div className='contact-info'>
            <h4>Contact Information</h4>
              <p>Call us, send us an e-mail or fill out the form and send a message.</p>
              <div className='icon-text'>
                <i className='icon' aria-hidden="true"><CiPhone /></i>
                <Link to="tel:+902163314800" className='link2'>(0216) 331 48 00</Link>
              </div>
              <div className='icon-text'>
                <i className='icon' aria-hidden="true"><CiMail /></i>
                <Link to="mailto:support@rentogo.com" className='link2'>info@tobeto.com</Link>
              </div>
              <div className='icon-text'>
                <i className='icon' aria-hidden="true"><CiMapPin /></i>
                <span>Kavacık, Rüzgarlıbahçe Mah. Çampınarı Sok. No:4 Smart Plaza B Blok Kat:3 34805, Beykoz,İstanbul</span>
              </div>
              <div className='social-media'>
                <Link to="https://www.linkedin.com/company/tobeto/" target='_blank' className='icon-circle'>
                  <i className='fa fa-linkedin'><FaLinkedin /></i>
                </Link>
                <Link to="https://www.instagram.com/tobeto_official/" target='_blank' className='icon-circle'>
                  <i className='fa fa-instagram'><FaInstagram /></i>
                </Link>
                <Link to="https://m.facebook.com/tobetoplatform?refid=13&__tn__=%2Cg" target='_blank' className='icon-circle'>
                  <i className='fa fa-facebook'><FaFacebook /></i>
                </Link>
                <Link to="https://www.youtube.com/@tobeto-platform" target='_blank' className='icon-circle'>
                  <i className='fa fa-youtube'><FaYoutube /></i>
                </Link>
              </div>
            </div>
            <form>
              <div className='col'>
                <div className='form-group'>
                  <label>First Name</label>
                  <input type='text'></input>
                </div>
                <div className='form-group'>
                  <label>Last Name</label>
                  <input type='text'></input>
                </div>
              </div>
              <div className='col'>
                <div className='form-group'>
                  <label>Email</label>
                  <input type='email'></input>
                </div>
                <div className='form-group'>
                  <label>Phone</label>
                  <input type='tel' pattern="0[2-9][0-9]{8}"></input>
                </div>
              </div>
              <div className='col-2'>
                <div className='form-group'>
                  <label>Message</label>
                  <textarea></textarea>
                </div>
              </div>
              <div className='col-2'>
                <div className='form-group right'>
                  <Button className='primary'>Send Message</Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ContactPage