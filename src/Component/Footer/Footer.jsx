import React from "react";
import "./Footer.css";
import Insta from "./Images/Insta.png";
import Linkdin from "./Images/Linkdin.png";
import gpay from "./Images/gpay.png";
import pay1 from "./Images/pay1.png";
import pay2 from "./Images/pay2.png";
import applepay from "./Images/applepay.png";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="newsletter">
          <h3>BE THE FIRST TO KNOW</h3>
          <p>Sign up for updates from mettà muse.</p>
          <div className="newsletter-input">
            <input type="email" placeholder="Enter your email..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>
        <div className="contact">
          <h3>CONTACT US</h3>
          <p>+44 221 133 5380</p>
          <p>customercare@mettamuse.com</p>
          <div className="currency">
            <h3>CURRENCY</h3>
            <p>
              <img
                src="https://www.countryflags.com/wp-content/uploads/united-states-of-america-flag-png-large.png"
                alt="USD Flag"
                width="20"
              />
              &nbsp; USD
            </p>
            <p>
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </p>
          </div>
        </div>
      </div>

      <div className="bottom-footer">
        <hr className="horizontal-line" />
        <div className="footer-section">
          <h4>mettā muse</h4>
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>QUICK LINKS</h4>
          <ul>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>FOLLOW US</h4>
          <ul className="social-icons">
            <li>
              <img src={Insta} alt="Instagram" />
            </li>
            <li>
              <img src={Linkdin} alt="LinkedIn" />
            </li>
          </ul>
          <div className="footer-section">
            <h4>mettā muse ACCEPTS</h4>
            <ul className="payment-methods">
              <li>
                <img src={applepay} alt="Apple Pay" />
              </li>
              <li>
                <img src={pay1} alt="Payment Method 1" />
              </li>
              <li>
                <img src={pay2} alt="Payment Method 2" />
              </li>
              <li>
                <img src={gpay} alt="Google Pay" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
