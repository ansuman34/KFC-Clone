import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section logo">
          <img src="https://images.ctfassets.net/wtodlh47qxpt/25FSYFuEtGct8NSrtpKe6d/b602f6fe0bf294e6a6dff5d7648bf594/KFC_Logo.svg" alt="KFC Logo" />
        </div>
        <div className="footer-section legal">
          <h4>Legal</h4>
          <ul>
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
            <li>Disclaimer</li>
            <li>Caution Notice</li>
          </ul>
        </div>
        <div className="footer-section about">
          <h4>KFC India</h4>
          <ul>
            <li>About KFC</li>
            <li>KFC Care</li>
            <li>Careers</li>
            <li>Our Golden Past</li>
          </ul>
        </div>
        <div className="footer-section food">
          <h4>KFC Food</h4>
          <ul>
            <li>Menu</li>
            <li>Order Lookup</li>
            <li>Gift Card</li>
            <li>Nutrition & Allergen</li>
          </ul>
        </div>
        <div className="footer-section support">
          <h4>Support</h4>
          <ul>
            <li>Get Help</li>
            <li>Contact Us</li>
            <li>KFC Feedback</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-section apps">
          <h4>Download Our App</h4>
          <div className="app-icons">
            <img src="https://images.ctfassets.net/wtodlh47qxpt/6BdZsyjLn64c06uCIE73d1/fb530f5d5231533b049463f6c7e8a2b1/google_play.svg" alt="Google Play" />
            <img src="https://images.ctfassets.net/wtodlh47qxpt/em3mcMuAdXWlgucSJiTbS/d3ae7e51ed101d829e459355e255c47f/apple.svg" alt="App Store" />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© KFC Corporation 2024 All rights reserved</p>
        <div className="social-icons">
          <img src="https://images.ctfassets.net/wtodlh47qxpt/4ZHyPA2EeaoP3aqtNDriBA/463462a9c27b0aa585e12b21ce3766e0/Social_Insta_White.svg" alt="Instagram" />
          <img src="https://images.ctfassets.net/wtodlh47qxpt/dKiu2meLcfz2DNwsg7nZw/7194830b1ba6f25b158a23d6b2c4752c/Social_Facebook_White.svg" alt="Facebook" />
          <img src="https://images.ctfassets.net/wtodlh47qxpt/78z9x0WwdkdXwGVK726EKX/6599ca34ec88e2a6f46d7d94ed85a8ad/Social_Twitter_White.svg" alt="Twitter" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
