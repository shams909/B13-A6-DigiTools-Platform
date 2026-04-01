import React from 'react';

function Stats() {
  return (
    <section className="stats">
      <div className="stat-item">
        <span className="stat-number">50K+</span>
        <p className="stat-label">Active Users</p>
      </div>
      <div className="stat-item">
        <span className="stat-number">200+</span>
        <p className="stat-label">Premium Tools</p>
      </div>
      <div className="stat-item">
        <span className="stat-number">4.9</span>
        <p className="stat-label">Rating</p>
      </div>
    </section>
  );
}

export default Stats;
