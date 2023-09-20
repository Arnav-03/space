import './css/login.css'
import React, { useState } from 'react';
import rocket from './assets/rocket.svg'

const Login = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    phone: false
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formData.name === '' || formData.email === '' || formData.phone === '') {
      setFormErrors({
        name: formData.name === '',
        email: formData.email === '',
        phone: formData.phone === ''
      });
    } else {
      setFormErrors({
        name: false,
        email: false,
        phone: false
      });
      
      console.log(formData);
      document.querySelector('.loginpage ').style.height = 0;
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }

  return (
    <>
      <div className="loginpage">
        <div className="login-info">
          <div className="text"></div>
          Seize the moment by logging in today for an exclusive chance to win a  <span className='animate__animated animate__tada animate__infinite free'>free ticket</span> granting you passage on an extraordinary cosmic odyssey of a lifetime!
          <div className="circle"></div>
        </div>

        <div className="login-form">
          <form onSubmit={handleSubmit} className='contact-form'>
            <label htmlFor="name">Name</label><br></br>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {formErrors.name && <span className="error-message">Name is required</span>}
            <br />
            <label htmlFor="email">Email</label><br></br>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {formErrors.email && <span className="error-message">Email is required</span>}
            <br />
            <label htmlFor="phone">Phone Number</label><br></br>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            {formErrors.phone && <span className="error-message">Phone number is required</span>}
            <br />
            <button type="submit" id='submit-login' >Submit</button>
          </form>
        </div>
      </div>
      
      <div className="login-ticket">
        {formErrors.name || formErrors.email || formErrors.phone ? (
          <div className="ticketinfo error-message">Please fill in all required fields.</div>
        ) : (
          <div className="ticketinfo">
            Thank you for providing your details. Your ticket is now in the queue, and we're excited to embark on this cosmic adventure with you!
          </div>
        )}
        <div className="ticket">
          <div className="left-ticket">
            <div className="ticket-img">
              <img src={rocket} alt="" />
            </div>
          </div>
          <div className="right-ticket">
            <div className="lname"><span className='ticketspan'>name</span> {formData.name}</div>
            <div className="lemail"><span className='ticketspan'>email</span> {formData.email}</div>
            <div className="lphone"><span className='ticketspan'>phone</span> {formData.phone}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login;
