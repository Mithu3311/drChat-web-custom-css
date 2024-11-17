'use client'
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-description">
        Feel free to reach out to us for any questions or support Were here to help!
      </p>
      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" placeholder="Enter your full name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" rows={5} placeholder="Write your message here"></textarea>
        </div>
        <button type="submit" className="contact-button">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
