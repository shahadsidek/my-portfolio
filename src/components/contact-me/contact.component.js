import React, { useRef } from 'react';
import './contact.styles.css'
import emailjs from '@emailjs/browser';
import imgCont from '../../img/contact.png'


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_tbthmvr',
      'template_dq0ic3d',
      form.current,
      'GyqTXpijMSOGBeVuN')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };


  return (
    <><h2 id="contact" >Contact Me</h2>
    <div  className="main-c-container">
      <div className='contact-info-container'>
        <form ref={form} onSubmit={sendEmail}>
          <h3>Drop a Line</h3>
          <div className='inputBox'>
            <input type='text' name='user_name' required />
            <span>Full Name</span>
          </div>
          <div className='inputBox'>
            <input type='email' name='user_email' required />
            <span>Email Address</span>
          </div>
          <div className='inputBox'>
            <input type='text' name='user_phone' required />
            <span>Phone Number</span>
          </div>
          <div className='inputBox'>
            <textarea name='message' rows='5'required></textarea>
            <span>Type Your Message Here </span>
          </div>
          <div className='inputBox'>
          <button id='submit-button' type='submit'>Send</button>
          </div>
        </form>
        
      </div>
      <div className="contact-picture-container">
        <img src={imgCont}/>
      </div>
    </div>
    </>
  )
}

export default Contact
