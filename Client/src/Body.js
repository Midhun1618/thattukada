import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal } from 'antd';
import './Body.css';

function Body() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [menuItems, setMenuItems] = useState([]);

  // Fetch menu data on component mount
  useEffect(() => {
    axios.get('http://localhost:5000/menu')
      .then(response => {
        setMenuItems(response.data);
      })
      .catch(error => {
        console.error("Error fetching menu items:", error);
      });
  }, []);

  const showModal = (item) => {
    setSelectedOrder(item);
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="body-bg">
      <div className="main-container">
        <section className="card">
          <h2 className="section-title">Live Menu</h2>
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="order-card"
              onClick={() => showModal(item)}
            >
              <div className="order-info">
                <div>
                  <span>Item : </span><span className="font-bold">{item.name}</span>
                </div>
                <div>
                  <span className="tag">{item.availability ? "Available" : "Out of Stock"}</span>
                </div>
              </div>
              <div className="order-info">
                <div className="order-text">Price : Rs {item.price}</div>
                <div className="order-text">Image : {item.image}</div>
              </div>
            </div>
          ))}
        </section>

        {/* You can keep other sections like Preparing, Ready to Serve if you want */}
      </div>

      {/* Modal */}
      <Modal
        title={`Item Details: ${selectedOrder?.name}`}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {selectedOrder && (
          <div>
            <p><strong>Name:</strong> {selectedOrder.name}</p>
            <p><strong>Price:</strong> ₹{selectedOrder.price}</p>
            <p><strong>Status:</strong> {selectedOrder.availability ? "Available" : "Out of Stock"}</p>
            <p><strong>Image:</strong> {selectedOrder.image}</p>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default Body;
