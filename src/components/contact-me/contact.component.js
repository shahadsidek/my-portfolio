import React from "react";
import './contact.styles.css'


const Contact = () => {
  return (
    <div className= "main-c-container">
      <div className='picture-c-container'>
        <img 
          src='https://img.freepik.com/premium-vector/customer-support-contact-us-man-with-headphones-microphone-with-laptop-talking-with-clients-personal-assistant-service-hotline-operator-advises-customer-online-global-technical-support_458444-1242.jpg?w=2000' 
          width="900px"
          alt="contact me form"
        /> 
      </div>
      <div className='contact-info-container'>
        <form>
          <h3>Drop a Line</h3>
          <input type='text' id='name' placeholder='enter your name'required/>
          <input type='email' id='email' placeholder='Email Id'required/>
          <input type='text' id='phone' placeholder='Phone Number'required/>
          <textarea id='message' placeholder='Message' rows='10'></textarea>
          <button type='submit'>Send</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
