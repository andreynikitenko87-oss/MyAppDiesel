import React from 'react'

const services = [
  {
    name: 'Engine Diagnostics',
    description:
      'Advanced computer diagnostics for diesel engine issues so problems can be identified quickly and accurately.'
  },
  {
    name: 'Fuel System Repair',
    description:
      'Complete fuel injection service, injector replacement, pump repair, and fuel delivery troubleshooting.'
  },
  {
    name: 'Turbocharger Service',
    description:
      'Turbo repair, replacement, and maintenance to support power, reliability, and efficiency.'
  },
  {
    name: 'Transmission Service',
    description:
      'Transmission diagnostics, repair, rebuild support, and maintenance for diesel trucks.'
  },
  {
    name: 'Oil and Filter Changes',
    description:
      'Professional oil changes and filter replacements using diesel-specific parts and lubricants.'
  },
  {
    name: 'Custom Tuning',
    description:
      'Performance tuning and ECU modifications for safer horsepower and torque improvements.'
  }
]

function Services() {
  return (
    <section id="services" className="section-muted">
      <h2>Our Services</h2>
      <div className="services-container">
        {services.map((service) => (
          <article className="service-card" key={service.name}>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Services
