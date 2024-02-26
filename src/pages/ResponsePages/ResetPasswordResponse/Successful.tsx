import React from 'react'
import { Link } from 'react-router-dom'
import { Footer, Navbar } from '../../../components'
import "../response.css"
type Props = {}

const Successful = (props: Props) => {
  return (
    <>
    <Navbar />
    <div className="response container">
      <div className="secContainer shadow-rounded-box">
        <div className="titleContainer">
          <h2>Password Changed Successfully. !</h2>
        </div>
        <div className="contentContainer">
        <p>
              <span>Your password has been successfully changed. Please log in. </span><br></br>
            </p>
        </div>
        <div className="actionContainer">
          <Link
            to="/sign-in"
            type="button"
            className="btn btn-profile"
          >
            Log In
          </Link>
        </div>
      </div>
    </div>
    <Footer />
  </>
  )
}

export default Successful