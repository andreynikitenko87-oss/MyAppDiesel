import React from 'react'

function Contact() {
  return (
    <section id="contact">
      <h2>Contact Us</h2>
      <div className="contact-info">
        <div className="contact-item">
          <h3>Address</h3>
          <p>1500 Industrial Boulevard<br />Truck City, TX 75001</p>
        </div>
        <div className="contact-item">
          <h3>Phone</h3>
          <p><a href="tel:+19725551234">(972) 555-1234</a></p>
        </div>
        <div className="contact-item">
          <h3>Email</h3>
          <p><a href="mailto:info@openroaddiesel.com">info@openroaddiesel.com</a></p>
        </div>
        <div className="contact-item">
          <h3>Hours</h3>
          <p>Monday - Friday: 7:00 AM - 6:00 PM<br />Saturday: 8:00 AM - 4:00 PM<br />Sunday: Closed</p>
        </div>
      </div>
    </section>
  )
}

export default Contact

