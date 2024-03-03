import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Footer, Navbar } from "../../components";
import { Button } from 'react-bootstrap';

import { CiMail, CiPhone, CiMapPin } from "react-icons/ci";
import { FaLinkedin, FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";

import axios from 'axios';
import Aos from "aos";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useTranslation } from "react-i18next";
import "./contactPage.css";
import { object, string } from 'yup';

import { Helmet } from 'react-helmet';
import axiosInstance from '../../utils/axiosInsterceptors';
import { ToastContainer, toast } from 'react-toastify';



const ContactPage = () => {
  const settings = useSelector((state: any) => state.settings.setting)
  const { t } = useTranslation();

  function formatPhoneNumber(phoneNumber: string) {
    const regex = /(\d{4})(\d{3})(\d{2})(\d{2})/;
    const formattedPhoneNumber = phoneNumber.replace(regex, '$1 $2 $3 $4');
    return formattedPhoneNumber;
  }

  const validationSchema = object({
    firstName: string().required("First name is required"),
    lastName: string().required("Last name is required"),
    email: string().required("Email is required").email("Invalid email"),
    phone: string().required("Phone number is required"),
    message: string().required("Message is required"),
  });

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  useEffect(() => {
    Aos.init({ duration: 2000, offset: 20 });
  }, []);

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (values: any, { setSubmitting }: any) => {
    try {
      await axiosInstance.post('send-contact-email', values);
      toast.success(t("messageSent"));
    } catch (error) {
      console.error('Error sending email:', error);
      alert(t("messageError"));
    }
  
    setSubmitting(false);
  };

  return (
    <>
      <Helmet>
        <title>{settings.title} - Contact Page</title>

      </Helmet>
      <Navbar />
      <div className='contact'>
        <div className='contact-entry'>
          <div className='entry-text'>
            <h2 data-aos="fade-right">{t("weAreWorking")}</h2>
            <p data-aos="fade-left">{t("ifYouHaveASituation")}</p>
          </div>
        </div>
        <div className='contact-form'>
          <h1>{t("contactUs")}</h1>
          <div id='contact-container'>
            <div className='contact-info'>
              <h4>{t("contactInformation")}</h4>
              <p>{t("callUsSendUsAnEmail")}</p>
              <div className='icon-text'>
                <i className='icon' aria-hidden="true"><CiPhone /></i>
                <Link to={`tel:${settings.phoneNumber} `} className='link2'>{formatPhoneNumber(settings.phoneNumber)}</Link>
              </div>
              <div className='icon-text'>
                <i className='icon' aria-hidden="true"><CiMail /></i>
                <Link to={`mailto:${settings.email}`} className='link2'>{settings.email}</Link>
              </div>
              <div className='icon-text'>
                <i className='icon' aria-hidden="true"><CiMapPin /></i>
                <Link to="https://www.google.com/maps/place/Smart+Plaza/@41.0901293,29.0908427,17z/data=!3m1!4b1!4m6!3m5!1s0x14cacbca50da40b7:0x1d0efe9cea6f6572!8m2!3d41.0901254!4d29.0957136!16s%2Fg%2F11bycl90bm?entry=ttu" target='_blank' rel="noopener noreferrer" className='link2'>
                  Kavacık, Rüzgarlıbahçe Mah. Çampınarı Sok. No:4 Smart Plaza B Blok Kat:3 34805, Beykoz,İstanbul
                </Link>
              </div>
              <div className='social-media'>
                <Link to={settings.linkedin} target='_blank' className='icon-circle'>
                  <i className='fa fa-linkedin'><FaLinkedin /></i>
                </Link>
                <Link to={settings.instagram} target='_blank' className='icon-circle'>
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
            <Formik
            initialValues={formData}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            {({ errors, touched }) => (
              <Form>
                <div className='col'>
                  <div className='form-group'>
                    <label>{t("firstName")}</label>
                    <Field name='firstName' placeholder=' ' type='text' />
                    <ErrorMessage name="firstName" component="div" className="text-danger"/>
                  </div>
                  <div className='form-group'>
                    <label>{t("lastName")}</label>
                    <Field name='lastName' placeholder=' ' type='text' />
                    <ErrorMessage name="lastName" component="div" className="text-danger"/>
                  </div>
                </div>
                <div className='col'>
                  <div className='form-group'>
                    <label>{t("email")}</label>
                    <Field name='email' placeholder=' ' type='email' />
                    <ErrorMessage name="email" component="div" className="text-danger"/>
                  </div>
                  <div className='form-group'>
                    <label>{t("phone")}</label>
                    <Field name='phone' placeholder=' ' type='tel' />
                    <ErrorMessage name="phone" component="div" className="text-danger"/>
                  </div>
                </div>
                <div className='col-2'>
                  <div className='form-group'>
                    <label>{t("message")}</label>
                    <Field name='message' placeholder=' ' as='textarea' />
                    <ErrorMessage name="message" component="div" className="text-danger" />
                  </div>
                </div>
                <div className='col-2'>
                  <div className='form-group right'>
                    <button type='submit' className='primary' data-aos="zoom-in">{t("sendMessage")}</button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <ToastContainer position='bottom-center' />
    </div>
    <Footer />
  </>
)
}

export default ContactPage