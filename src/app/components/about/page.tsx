import React from 'react';

const About: React.FC = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>
      <p className="about-description">
        Welcome to DrChat, your trusted platform for connecting doctors and patients online.
        We aim to provide convenient, reliable, and accessible healthcare solutions.
      </p>
      <div className="about-content">
        <div className="about-card">
          <h2>Our Mission</h2>
          <p>
            Our mission is to bridge the gap between doctors and patients, offering a seamless
            platform for communication and consultation.
          </p>
        </div>
        <div className="about-card">
          <h2>Our Vision</h2>
          <p>
            To revolutionize healthcare by making it accessible to everyone, anywhere, at any time.
          </p>
        </div>
        <div className="about-card">
          <h2>Why Choose Us?</h2>
          <p>
            With a user-friendly interface, secure communication, and experienced doctors,
            DrChat is your one-stop solution for online healthcare.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
