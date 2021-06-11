import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className='footer'>
      <div className='footer__links'>
        <p className='footer__link'>© 2021 MyHealthAvatar</p>
        <p className='footer__link'>Terms of Service</p>
        <p className='footer__link'>Privacy Policy</p>
        <p className='footer__link'>Code of Business Conduct</p>
        <p className='footer__link'>Privacy Notice</p>
      </div>

      <div className='footer__socials'>
        <p className='footer__text'>Follow us on social media: </p>
        <img src='' alt='facebook' className='footer__social-icon' />
        <img src='' alt='twitter' className='footer__social-icon' />
        <img src='' alt='instragram' className='footer__social-icon' />
      </div>
    </div>
  );
}

export default Footer;
