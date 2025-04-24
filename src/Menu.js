import React from "react";
import './Menu.css';

function Menu() {
  const cards = Array.from({ length: 16 });

  return (
    <div className="menu-container">
      <div className="grid-container">
        {cards.map((_, index) => (
          <div key={index} className="card">
            <div className="image-container">
              <img
                alt="Chaya"
              />
            </div>
            <div className="status">Available</div>
            <h2 className="title">Chaya</h2>
            <p className="price">Rs.12</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
