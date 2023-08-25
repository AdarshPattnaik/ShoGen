// Contact Component: Contact.jsx
import React from 'react';
import Footer from './Footer';
import { useAuth0 } from "@auth0/auth0-react";

export default function Contact() {

  const { user, isAuthenticated } = useAuth0();

  return (
    <>
      <h2 className="contact-head text-center text-dark-emphasis my-5">Contact Us</h2>

      <div className="container">
        <div className="contact-form mb-5">

          <form
            className="d-flex flex-column align-items-center"
            action="https://formspree.io/f/xnqkdzkv"
            method="POST">
            <label className='text-start label-tag'>Username:</label>
            <input
              required
              className="input-1"
              type="text"
              placeholder="Enter your username..."
              name="Username"
              autoComplete='off' />
            <label className='text-start label-tag'>Email:</label>
            <input
              required
              className="input-2"
              type="email"
              placeholder="Enter your email..."
              name="Email"
              autoComplete='off' />
            <label className='text-start label-tag'>Message:</label>
            <textarea
              required
              className="input-3"
              name="Message"
              cols="30"
              rows="10"
              placeholder='Enter your message...'>
            </textarea>

            <input
              className="submit-btn text-capitalize mt-4"
              type="submit"
              value="send" />

          </form>

        </div>
      </div>

      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4504.291718407058!2d84.8184071846443!3d22.240858080273433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1692119574534!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>
      <Footer />
    </>
  );
};