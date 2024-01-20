import React from 'react';
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const Footer = () => (
  <div className="mt-24">
    <p className="dark:text-gray-200 text-gray-700 text-center m-20">
      © {currentYear} All rights reserved by rent2go.com
    </p>
  </div>
);

export default Footer;
