import React from 'react';
import userIcon from '../../assets/user.png';
import packageIcon from '../../assets/package.png';
import rocketIcon from '../../assets/rocket.png';

function Steps() {
  return (
    <section className="steps-section" id="features">
      <div className="section-header">
        <h2 className="section-title">Get Started In 3 Steps</h2>
        <p className="section-desc">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>

      <div className="steps-grid">
        <div className="step-card">
          <div className="step-number">01</div>
          <div className="step-icon-wrap">
            <img src={userIcon} alt="Create Account" />
          </div>
          <h3 className="step-title">Create Account</h3>
          <p className="step-desc">
            Sign up for free in seconds. No credit card required to get started.
          </p>
        </div>

        <div className="step-card">
          <div className="step-number">02</div>
          <div className="step-icon-wrap">
            <img src={packageIcon} alt="Choose Products" />
          </div>
          <h3 className="step-title">Choose Products</h3>
          <p className="step-desc">
            Browse our catalog and select the tools that fit your needs.
          </p>
        </div>

        <div className="step-card">
          <div className="step-number">03</div>
          <div className="step-icon-wrap">
            <img src={rocketIcon} alt="Start Creating" />
          </div>
          <h3 className="step-title">Start Creating</h3>
          <p className="step-desc">
            Download and start using your premium tools immediately.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Steps;
