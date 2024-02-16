import React from "react";
import { Link } from "react-router-dom";
import { Footer, Navbar } from "../../components";

type Props = {};

const companyName = "Ren2Go Araç Kiralama Hizmetleri Ticaret Limited Şirketi";
const currentDate = new Date();
const year = currentDate.getFullYear();
const CopyrightNotice = (props: Props) => {
  return (
    <>
      <Navbar />
      <div className="legal container">
        <div className="secContainer shadow-rounded-box">
          <div className="headingDiv">
            <h2>Copyright Notice</h2>
            <img src="/assets/img/example.png" alt="example-text" />
          </div>
          <div className="contentContainer nonNavbar">
            <div className="letterContainer ">
              <p>
                <small>Last updated: February 15, 2024</small>
              </p>

              <h2 id="interpretation">
                Copyright © 2024 {companyName}. All rights reserved.
              </h2>

              <p>
                All text, graphics, logos, audio files, and videos contained in
                this document are the property of <strong>{companyName}</strong>{" "}
                and are protected by applicable copyright laws and international
                agreements. Unauthorized use, copying, or distribution of these
                contents is prohibited. The contents of this document are
                intended solely for a specific project or product and may not be
                used or distributed for any other purpose without the written
                permission of <strong>{companyName}</strong>. While{" "}
                <strong>{companyName}</strong> makes reasonable efforts to
                ensure the accuracy of the contents in this document, it does
                not guarantee that these contents are complete, accurate, or
                up-to-date. <strong>{companyName}</strong> is not liable for any
                damages resulting from the use of the contents in this document.
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

export default CopyrightNotice;
