import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../style/contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ from_name: '', message: '' });
  const [statusMessage, setStatusMessage] = useState('');

  
  const handleChange = (e) => {
    const { name, value } = e.target; 
    setFormData((prevState) => ({
      ...prevState,
      [name]: value, 
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_0mljtul', 
        'template_tkyaixf', 
        {
          from_name: formData.from_name,
          message: formData.message,
        },
        'KajQzYcIDZ0ibzuj-' 
      )
      .then(
        (result) => {
          setStatusMessage('Message sent successfully!');
          setFormData({ from_name: '', message: '' }); 
        },
        (error) => {
          setStatusMessage('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <div id='contact-container'>
      <div id='contact-main-div'>
        <div id='message-div'>
          <h1>Contact Me</h1>
          <form id='form' onSubmit={handleSubmit}>
            <input
              type='text'
              id='name-input'
              name='from_name'
              placeholder='Your Name'
              value={formData.from_name}
              onChange={handleChange}
              required
            />
            <input
              id='message-input'
              name='message' 
              placeholder='Your Message'
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button id='submit' type='submit'>Send Message</button>
          </form>

          {statusMessage && <p>{statusMessage}</p>}
        </div>
      </div>
    </div>
  );
};

export default Contact;
