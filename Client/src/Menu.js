import React from "react";
import './Menu.css';

import { Switch } from "antd";

function Menu() {
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };
  const cards = Array.from({ length: 16 });

  return (
    <div className="menu-container">
      <div className="grid-container">
        {cards.map((_, index) => (
          <div key={index} className="card1">
       
            <div className="image-container">
              <img
                alt="Chaya"
              />
            </div>
            <Switch defaultChecked onChange={onChange} />
      
  
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
