'use client'

import { useState } from 'react'
import Navigation from '../../components/Navigation'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Here you would typically handle the form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="page-container">
      <Navigation />
      <div className="main-content">
        <div className="contact-container">
          <h1>Contact</h1>
          <div className="contact-info">
            <p>Qianyu Fu</p>
            <p>qianyufu21@gmail.com</p>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Your Phone:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-input"
                rows="5"
                required
              />
            </div>
            <button type="submit" className="form-button">
              Leave a Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
} 