import React from 'react'
import './success.css'
import { Link } from 'react-router-dom'

type Props = {}

const SuccessPage = (props: Props) => {
  return (
    <html>

      <head>
        <link href="https://fonts.googleapis.com/css?family=Nunito+Sans:400,400i,700,900&display=swap" rel="stylesheet" />
      </head>

      <body className='container-body'>
        <div className="card">
          <div className='content'>
            <i className="checkmark">✓</i>
          </div>
          <h1>Success</h1>
          <p>We have received your password change request;<br/>
            Please check your e-mail box. !</p>
            <Link to={'/sign-up'} className='button' type='button'>Login Page </Link>
        </div>
      
      </body>                             
    </html>
  )
}

export default SuccessPage