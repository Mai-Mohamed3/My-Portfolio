import React, { useState } from 'react';
import '../Style/Contact.css';

const Contact = () => {
  const [messageSent, setMessageSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showMessageBox, setShowMessageBox] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    fetch("https://formsubmit.co/ajax/mai.mo.alii3@gmail.com", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
      },
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          setMessageSent(true);
          setErrorMessage('');
          setShowMessageBox(true);
          form.reset();
        } else {
          setErrorMessage("Something went wrong. Please try again later.");
          setShowMessageBox(true);
        }
      })
      .catch((error) => {
        console.error("Sending error:", error);
        setErrorMessage("There was an issue sending the message. Please try again.");
        setShowMessageBox(true);
      });
  };

  const handleCloseMessageBox = () => {
    setShowMessageBox(false);
  };

  return (
    <div className="contact-container">
     <h2 className="contact-title slide-down delay-1">
        {"Contact Me".split("").map((char, index) => (
          <span key={index} className="stroked-text">
            {char}
          </span>
        ))}
      </h2>

      <h4 className="contact-cta slide-down delay-2">
        Got an idea you'd like to bring to life? Let's make it happen — reach out!
      </h4>

      <div className="contact-content">
        <div className="contact-info">
          <p className="slide-left delay-3"><strong>Phone:</strong> +2 01143607452</p>
          <p className="slide-left delay-4"><strong>Email:</strong> mai.mo.alii3@gmail.com</p>
          <p className="slide-left delay-5"><strong>Website:</strong> yoursite.com</p>
          <p className="slide-left delay-6"><strong>Address:</strong> Cairo, Egypt</p>
          <div className="socials about-socials">
            <a href="mailto:mai.mo.alii3.com" className="icon1" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-envelope icon1"></i>
            </a>
            <a href="https://github.com/Mai-Mohamed3" className=" icon2" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github icon2"></i>
            </a>
            <a href="https://www.linkedin.com/in/mai-mohamed-developer/" className="icon3" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in icon3"></i>
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input type="text" name="name" placeholder="Your Name" required className="slide-right delay-3" />
          <input type="email" name="email" placeholder="Your Email" required className="slide-right delay-4" />
          <input type="text" name="subject" placeholder="Subject" className="slide-right delay-5" />
          <textarea name="message" placeholder="Message" rows="5" required className="slide-right delay-6"></textarea>
          <button type="submit" className="slide-right delay-7">Send Message</button>
        </form>

        {showMessageBox && (
          <div className="message-box">
            <p>{messageSent ? "Your message has been sent. We'll get back to you as soon as possible." : errorMessage}</p>
            <button className="close-btn" onClick={handleCloseMessageBox}>OK</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
