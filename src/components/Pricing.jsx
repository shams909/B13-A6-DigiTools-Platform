import React from 'react';

function Pricing() {
  return (
    <section className="pricing-section" id="pricing">
      <div className="section-header">
        <h2 className="section-title">Simple, Transparent Pricing</h2>
        <p className="section-desc">
          Choose the plan that works best for you and your team.
        </p>
      </div>

      <div className="pricing-grid">
        {/* Starter */}
        <div className="pricing-card">
          <div className="pricing-plan">Starter</div>
          <div className="pricing-tagline">Perfect for getting started</div>
          <div className="pricing-price">$0</div>
          <div className="pricing-period">Month</div>
          <ul className="pricing-features">
            <li>Access to 10 free tools</li>
            <li>Basic templates</li>
            <li>Community support</li>
            <li>5 projects per month</li>
          </ul>
          <button className="pricing-btn">Get Started Free</button>
        </div>

        {/* Pro - Featured */}
        <div className="pricing-card featured">
          <div className="pricing-badge">Most Popular</div>
          <div className="pricing-plan">Pro</div>
          <div className="pricing-tagline">Best for professionals</div>
          <div className="pricing-price">$29</div>
          <div className="pricing-period">Month</div>
          <ul className="pricing-features">
            <li>Access to all premium tools</li>
            <li>Unlimited templates</li>
            <li>Priority support</li>
            <li>Unlimited projects</li>
            <li>Cloud storage</li>
            <li>Advanced analytics</li>
          </ul>
          <button className="pricing-btn">Start Free Trial</button>
        </div>

        {/* Enterprise */}
        <div className="pricing-card">
          <div className="pricing-plan">Enterprise</div>
          <div className="pricing-tagline">For teams and businesses</div>
          <div className="pricing-price">$99</div>
          <div className="pricing-period">Month</div>
          <ul className="pricing-features">
            <li>Everything in Pro</li>
            <li>Team collaboration</li>
            <li>Custom integrations</li>
            <li>Dedicated support</li>
            <li>SLA guarantee</li>
            <li>Custom branding</li>
          </ul>
          <button className="pricing-btn">Contact Sales</button>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
