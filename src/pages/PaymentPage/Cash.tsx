import React from 'react'
import { Footer, Navbar } from '../../components';
import { useParams } from 'react-router-dom';
import "./payment.css"

type Props = {}


const Cash = (props: Props) => {
    const { selectedPaymentMethod } = useParams<{ selectedPaymentMethod: string }>();
    return (
        <>
          <Navbar />
          <div className="payment container">
            <div className="secContainer shadow-rounded-box">
              <div className="headingDiv">
                <h1>Selected Payment Method: {selectedPaymentMethod}</h1>
              </div>
              <div className="contentDiv">
                
              </div>
            </div>
          </div>
          <Footer />
        </>
      );
}

export default Cash