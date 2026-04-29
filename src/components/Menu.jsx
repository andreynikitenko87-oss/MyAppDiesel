import React from 'react'

function Menu() {
  const menuItems = [
    { name: 'Espresso', price: '$2.50' },
    { name: 'Cappuccino', price: '$3.50' },
    { name: 'Latte', price: '$4.00' },
    { name: 'Americano', price: '$2.75' }
  ]

  return (
    <section id="menu">
      <h2>Our Menu</h2>
      <div className="menu-items">
        {menuItems.map((item, index) => (
          <div key={index} className="item">
            <h3>{item.name}</h3>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Menu

