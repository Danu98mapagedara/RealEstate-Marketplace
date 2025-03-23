import React from 'react'
import './Footer.css'
import '@fortawesome/fontawesome-free/css/all.min.css';


const Footer = () => {
  return (
    <footer className="footer-container">
    <div className="footer-content">
      <div className="footer-section">
        <h3>COMPANY INFORMATION</h3>
        <ul>
          <li><a href="#">logo here</a></li>
          <li><a href="#">The company's office is located  D.S. Senanayake Mawatha, kandy, Sri Lanka.</a></li>
          <li><a href="#">📧info@evergreenpropertyholdings.com</a></li>
          <li><a href="#">📞+9471456784</a></li>



        </ul>
      </div>
      <div className="footer-section">
        <h3>QUICK LINKS</h3>
        <ul>
          <li><a href="#">Houses</a></li>
          <li><a href="#">Apartments</a></li>
          <li><a href="#">Lands</a></li>
        </ul>
      </div>
      <div className="footer-section newsletter">
        <h3>Newsletter</h3>
        <p>Join our mailing list for promotions and latest movie updates.</p>
        <div className="newsletter-input">
          <input type="email" placeholder="Type your email address" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
    <div className="social-icons">
    <h3>SOCIAL LINKS</h3>
    <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-facebook"></i>
    </a>
    <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-instagram"></i>
    </a>
    <a href="https://www.tiktok.com/@yourusername" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-tiktok"></i>
    </a>
</div>

      <p>© 2025 Property Finance and Investments </p>
      <div className="footer-links">
        <a href="#">Privacy policy</a>
        <a href="#">Terms and conditions</a>
      </div>
    </div>
  </footer>
  )
}

export default Footer