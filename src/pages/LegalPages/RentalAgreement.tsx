import React from "react";
import { Footer, Navbar } from "../../components";
import { Link } from "react-router-dom";

type Props = {};

const RentalAgreement = (props: Props) => {
  return (
    <>
      <Navbar />
      <div className="legal container">
        <div className="secContainer shadow-rounded-box">
          <div className="headingDiv">
            <h2>CAR RENTAL AGREEMENT</h2>
          </div>
          <div className="contentContainer nonNavbar">
            <div className="letterContainer ">
              <p>
                <small>Last updated: February 15, 2024</small>
              </p>
              <p>
                <strong>Lessor:</strong> [Lessor's Name and Address]
              </p>
              <p>
                <strong>Lessee: </strong> Ren2Go Araç Kiralama Hizmetleri
                Ticaret Limited Şirketi,
              </p>
              <p>
                <strong>Lessee's Address: </strong> Ataşehir Mahallesi, İstanbul
                Caddesi No: 123, Ataşehir, İstanbul, Türkiye
              </p>

              <p>
                This agreement is made between the Lessee specified above and
                the Lessor specified above concerning the rental of a vehicle.
              </p>

              <p>
                <strong>1. Details of the Leased Vehicle:</strong>
              </p>

              <p>Vehicle Make and Model: [Vehicle Make and Model]</p>
              <p>License Plate Number: [License Plate Number]</p>
              <p>Chassis Number: [Chassis Number]</p>
              <p>Rental Start Date: [Start Date of Rental]</p>
              <p>Return Date: [End Date of Rental]</p>
              <p>Rental Period: [Rental Period]</p>

              <p>
                <strong>2.Rental Fee and Payment Conditions:</strong>
              </p>

              <p>Rental Fee: [Rental Fee]</p>
              <p>Payment Method: [Payment Method]</p>
              <p>Deposit Amount: [Deposit Amount]</p>
              <p>Rental Start Date: [Start Date of Rental]</p>
              <p>
                Deposit Refund: The deposit will be refunded at the end of the
                rental period if the vehicle incurs no damage.
              </p>

              <p>
                <strong>3. Rental Terms and Conditions:</strong>
              </p>

              <p>
                The Lessee may not transfer or sublease the vehicle to any third
                party without the Lessor's permission.
              </p>
              <p>
                The Lessee must use the vehicle responsibly throughout the
                specified rental period.
              </p>
              <p>
                The Lessee must return the vehicle promptly on the specified
                return date. Delays may incur additional charges.
              </p>
              <p>
                The Lessee is responsible for adhering to the specified traffic
                rules and regulations while using the vehicle.
              </p>

              <p>
                <strong>4. Insurance and Damages:</strong>
              </p>

              <p>
                The leased vehicle is covered by comprehensive insurance.
                However, the Lessee may opt for additional insurance covering
                any damages to the vehicle.
              </p>
              <p>
                The Lessee must immediately inform the Lessor upon identifying
                any damage to the vehicle.
              </p>

              <p>
                <strong>5. Cancellation Conditions:</strong>
              </p>

              <p>
                The Lessee must cancel the reservation at least 24 hours before
                the start of the rental period. Otherwise, cancellation fees may
                apply.
              </p>
              <p>
                This agreement is signed as evidence of the agreement between
                the parties:
              </p>
              <p>
                Lessor's Signature: ________________________ Date:
                _______________
              </p>
              <p>
                Lessee's Signature: ________________________ Date:
                _______________
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

export default RentalAgreement;
