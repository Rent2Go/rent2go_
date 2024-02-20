import React from 'react'
import { Link } from 'react-router-dom'
import { Footer, Navbar } from '../../../components'
import "../response.css"
type Props = {}

const FailedPayment = (props: Props) => {
  return (
    <>
    <Navbar />
    <div className="response">
      <div className="secContainer shadow-rounded-box">
        <div className="titleContainer">
          <h2 className='text-alert'>Payment Failed !</h2>
        </div>
        <div className="contentContainer">
          <p>
            <span>Your payment has been failed.. </span><br></br>
            <span>
              Your reservation request has not been received..
            </span>
            <span>
            You can contact your bank or you can try another card/account..
            </span>
          </p>
        </div>
        <div className="actionContainer">
          <Link
            to="/cars"
            type="button"
            className="btn btn-profile"
          >
            Back
          </Link>
          <Link to="/" type="button" className="btn btn-home">
            Home
          </Link>
        </div>
      </div>
    </div>
    <Footer />
  </>
  )
}

export default FailedPayment
