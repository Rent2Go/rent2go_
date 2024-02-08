import React from 'react'
import "./footer.css"
import { Link } from 'react-router-dom';
type Props = {}
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const Footer = (props: Props) => {
  return (
    <div className='footer'>
       <p> © {currentYear} All rights reserved by <Link to="https://rentogo.com.tr">Rent2Go Projects</Link></p>
        
    </div>
  )
}

export default Footer