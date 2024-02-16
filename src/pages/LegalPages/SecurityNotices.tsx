import React from "react";
import { Footer, Navbar } from "../../components";
import { Link } from "react-scroll";
import "./legal.css";

type Props = {};

const SecurityNotices = (props: Props) => {
  return (
    <>
      <Navbar />
      <div className="legal container">
        <div className="secContainer shadow-rounded-box">
          <div className="headingDiv">
            <h2>Security Notice</h2>
            <img src="/assets/img/example.png" alt="example-text"/>
          </div>
          <div className="contentContainer nonNavbar">
            <div className="letterContainer ">
              <p>
                <small>Last updated: February 15, 2024</small>
              </p>

              <h2 id="interpretation">
                Important Information for Rentogo Users
              </h2>

              <p>
                Dear Rentogo Users, We would like to inform you about the
                security of your accounts and personal information on our
                platform. Recently, there have been growing concerns about
                certain security threats targeting rental platforms on the
                internet. Therefore, we recommend taking the following measures
                to ensure the security of your account:
              </p>

              <p>
                <strong>Beware of Suspicious Emails:</strong> Be cautious of
                emails requesting your account information or personal details
                claiming to be from Rentogo. Rentogo never requests sensitive
                information via email.
              </p>

              <p>
                <strong>Use Strong Passwords</strong> Ensure that you use
                unique, complex passwords for your Rentogo account. Avoid easily
                guessable passwords or reusing passwords from other accounts.
              </p>

              <p>
                <strong>Verify Website URLs:</strong> Double-check the URL of
                the website you are visiting to ensure it is the official
                Rentogo website (https://rentogo.com.tr). Avoid clicking on
                links from suspicious sources.
              </p>

              <p>
                <strong>Keep Your Devices Secure:</strong> Regularly update your
                devices (computers, smartphones, tablets) with the latest
                security patches and antivirus software to protect against
                malware and other cyber threats.
              </p>

              <p>
                At Rentogo, we are committed to ensuring the security of our
                users. If you have any security concerns or notice any
                suspicious activity, please do not hesitate to contact us. Thank
                you for your vigilance regarding security. Best regards, The
                Rentogo Team
              </p>

              <h2 id="contact">Contact Us</h2>
              <p>
                If you have any questions about these Terms and Conditions, You
                can contact us:
              </p>

              <h4>By visiting this page on our website: </h4>
              <Link
                to="/contact"
                rel="external nofollow noopener"
                target="_blank"
              >
                https://rentogo.com.tr/contact
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SecurityNotices;
