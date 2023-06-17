import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1 className="hero-title">Welcome to Our Blog</h1>
        <p className="hero-subtitle">Explore our articles and stay up-to-date with the latest news and trends.</p>
      </div>

      <div className="services-section">
        <h2 className="services-heading">Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3 className="service-title">Article Writing</h3>
            <p className="service-description">We provide high-quality articles on various topics to cater to your interests and needs.</p>
          </div>
          <div className="service-card">
            <h3 className="service-title">News Updates</h3>
            <p className="service-description">Stay informed with our timely news updates covering a wide range of industries and domains.</p>
          </div>
          <div className="service-card">
            <h3 className="service-title">Trending Topics</h3>
            <p className="service-description">Discover the latest trends, hot topics, and popular discussions happening around the world.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
