import "./Footer.css";
import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__content">
        <div className="footer__linkHeadings">
          <h3>Get to Know Us</h3>
          <p>About Us</p>
          <p>Careers</p>
          <p>Press releases</p>
          <p>Amazon Science</p>
        </div>
        <div className="footer__linkHeadings">
          <h3>Connect with Us</h3>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>
        <div className="footer__linkHeadings">
          <h3>Make Money with Us</h3>
          <p>Sell on Amazon</p>
          <p>Sell under Amazon Accelerator</p>
          <p>Protect and Build Your Brand</p>
          <p>Amazon Global Selling</p>
          <p>Become an Affiliate</p>
          <p>Fulfilment by Amazon</p>
          <p>Advertise Your Products</p>
          <p>Amazon Pay on Merchants</p>
        </div>
        <div className="footer__linkHeadings">
          <h3>Let Us Help You</h3>
          <p>COVID-19 and Amazon</p>
          <p>Your Account</p>
          <p>Returns Centre</p>
          <p>100% Purchase Protection</p>
          <p>Amazon App Download</p>
          <p>Help</p>
        </div>
      </div>
      <hr className="footer__line"></hr>
      <div>
        <img
          className="amazon__logo"
          src="https://pngimg.com/d/amazon_PNG11.png"
          alt=""
        />
        <div className="countries">
          <p>Australia</p>
          <p>Brazil</p>
          <p>Canada</p>
          <p>China</p>
          <p>France</p>
          <p>Germany</p>
          <p>Italy</p>
          <p>Japan</p>
          <p>Mexico</p>
          <p>Netherlands</p>
          <p>Poland</p>
          <p>Singapore</p>
          <p>Spain</p>
          <p>Turkey</p>
          <p>United Arab Emirates</p>
          <p>United Kingdom</p>
          <p>United States</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
