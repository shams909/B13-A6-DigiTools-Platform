import React from 'react';

function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <a href="#" className="navbar-logo">DigiTools</a>

      <ul className="navbar-links">
        <li><a href="#products">Products</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#faq">FAQ</a></li>
      </ul>

      <div className="navbar-right">
        <button className="cart-btn">
          🛒
          {cartCount > 0 && (
            <span className="cart-count">{cartCount}</span>
          )}
        </button>
        <button className="login-btn">Login</button>
        <button className="get-started-btn">Get Started</button>
      </div>
    </nav>
  );
}

export default Navbar;
