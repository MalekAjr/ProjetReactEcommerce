// Assuming you have already installed and set up React and other dependencies

import React from 'react';
import './Contact.scss';

const Contact = () => {
  return (
    <div className='contactpage'>
   {/*   <header>
       Your website logo, navigation, etc. can go here 
      </header>
      */}
      <main>
        <section className="contact-info">
          <h1>Contact Us</h1>
          <p>If you have any questions or concerns, please feel free to reach out to us.</p>
          <div className="contact-details">
            <div className="contact-item">
              <i className="fa fa-map-marker"></i>
              <p>123 Main Street, City, Country</p>
            </div>
            <div className="contact-item">
              <i className="fa fa-phone"></i>
              <p>+1 555-123-4567</p>
            </div>
            <div className="contact-item">
              <i className="fa fa-envelope"></i>
              <p>contact@example.com</p>
            </div>
          </div>
        </section>

        <section className="contact-form">
          <h2>Send us a Message</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </section>
      </main>

      <footer>
        {/* Footer content, links, etc. can go here */}
      </footer>
    </div>
  );
}

export default Contact;
