import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div>
          <div className="footer-brand">DigiTools</div>
          <p className="footer-brand-desc">
            Premium digital tools and resources to supercharge your workflow.
            Trusted by 50,000+ professionals worldwide.
          </p>
        </div>

        <div>
          <div className="footer-col-title">Products</div>
          <ul className="footer-links">
            <li><a href="#">AI Writing Pro</a></li>
            <li><a href="#">Design Templates</a></li>
            <li><a href="#">Stock Assets</a></li>
            <li><a href="#">Automation Toolkit</a></li>
          </ul>
        </div>

        <div>
          <div className="footer-col-title">Company</div>
          <ul className="footer-links">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div>
          <div className="footer-col-title">Support</div>
          <ul className="footer-links">
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Refund Policy</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 DigiTools. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
