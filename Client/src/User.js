import React from "react";
import './User.css';
import { Switch } from "antd";
import AddToCartButton from './Button';
import foodItems from './Food'; // assume this is exported from another file

function User() {
  const onChange = (checked) => {
    console.log(`Switch toggled: ${checked}`);
  };

  return (
    <div className="menu-container">
      <div className="grid-container">
        {foodItems.map((item, index) => (
          <div key={index} className="card2">
            <div className="card-content2">
              <div className="img-placeholder">
                {/* Use actual image if available */}
                <img src={`images/${item.image}`} alt={item.name} />
              </div>
              <div className="details">
                <p className="title">{item.name}</p>
                <p className="price">₹{item.price}</p>
              </div>
            </div>
            {/* <div className="switch-wrap">
              <Switch defaultChecked={item.availability} onChange={onChange} />
            </div> */}
             <div >
             <AddToCartButton/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default User;
