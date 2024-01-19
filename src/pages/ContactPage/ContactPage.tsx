import React from 'react'
import "./contactPage.css"
import { Footer, Navbar } from "../../components";
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

            </div>
            <form>
              <h4>Contact Information</h4>
              <p>text</p>
              <div className='icon-text'>
                <i className='icon'></i>
                <span>text</span>
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