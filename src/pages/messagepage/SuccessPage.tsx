import React from 'react'
import './success.css'

type Props = {}

const SuccessPage = (props: Props) => {
  return (
    <html>
  <head>
    <link href="https://fonts.googleapis.com/css?family=Nunito+Sans:400,400i,700,900&display=swap" rel="stylesheet"/>
  </head>
    
    <body>
      <div className="card">
      <div className='content'>
        <i className="checkmark">✓</i>
      </div>
        <h1>Success</h1> 
        <p>We received your purchase request;<br/> we'll be in touch shortly!</p>
      </div>
    </body>
</html>
  )
}

export default SuccessPage