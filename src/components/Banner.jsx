import React from 'react';
import bannerImg from '../../assets/banner.png';

function Banner() {
  return (
    <section className="banner">
      <div className="banner-left">
        <div className="banner-badge">
          <span></span>
          New: AI-Powered Tools Available
        </div>

        <h1 className="banner-title">
          Supercharge Your Digital Workflow
        </h1>

        <p className="banner-desc">
          Access premium AI tools, design assets, templates, and productivity
          software—all in one place. Start creating faster today.
        </p>

        <div className="banner-buttons">
          <button className="btn-primary">Explore Products</button>
          <button className="btn-outline">▷ Watch Demo</button>
        </div>
      </div>

      <div className="banner-right">
        <img src={bannerImg} alt="Digital workflow illustration" />
      </div>
    </section>
  );
}

export default Banner;
