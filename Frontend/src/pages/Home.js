// src/pages/Home.js
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'; // Import Footer component
import './Home.css';

const Home = () => (
  <div className="home-container">
    <Navbar />
    <header className="hero-section">
      <div className="hero-content">
        <h1>Welcome to the Banking App</h1>
        <p>Manage your finances effortlessly. Secure, fast, and reliable banking at your fingertips.</p>
      </div>
    </header>
    <section className="features-section">
      <h2>Why Choose Us?</h2>
      <div className="features">
        <div className="feature">
          <h3>Secure</h3>
          <p>Your security is our top priority with advanced encryption and secure login.</p>
        </div>
        <div className="feature">
          <h3>Easy to Use</h3>
          <p>A user-friendly interface that makes banking simple and hassle-free.</p>
        </div>
        <div className="feature">
          <h3>24/7 Access</h3>
          <p>Bank anytime, anywhere with our always-on platform.</p>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default Home;
