import React, { useRef } from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import emailjs from '@emailjs/browser';

 const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_gdo99t6', 'template_rh2cj2d', form.current, '8s_br0U-hCC0TrXCi')
      .then(
        () => {
          alert('Message sent successfully!');
          form.current.reset(); // Reset the form after sending
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send message, please try again.');
        },
      );
  };

  return (
    <div className="contact">
      <h1>Get in Touch</h1>
      <p>If you have any questions or just want to say hello, feel free to drop me a message. I'll get back to you as soon as possible!</p>
      
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" name="user_name" id="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="user_email" id="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" rows="5" required />
        </div>
        <input type="submit" value="Send" />
      </form>

      <div className="social-links">
        <a href="https://github.com/phani73" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="https://www.linkedin.com/in/phani-varma-9863842b6/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
