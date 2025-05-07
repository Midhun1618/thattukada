import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal } from 'antd';
import './Body.css';

function Body() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [menuItems, setMenuItems] = useState([]);

  const fetchMenuItems = () => {
    axios.get('http://localhost:5000/menu')
      .then(response => {
        setMenuItems(response.data);
      })
      .catch(error => {
        console.error("Error fetching menu items:", error);
      });
  };

  useEffect(() => {
    fetchMenuItems();
  }, []);

  const showModal = (item) => {
    setSelectedOrder(item);
    setIsModalOpen(true);
  };

  const handleOk = () => {
    if (selectedOrder) {
      axios.put(`http://localhost:5000/menu/${selectedOrder._id}`, {
        status: "preparing"
      })
        .then(response => {
          console.log("Status updated:", response.data);
          fetchMenuItems();
        })
        .catch(error => {
          console.error("Error updating status:", error);
        });
    }
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // Filter items by status
  const liveItems = menuItems.filter(item => item.status === "live");
  const preparingItems = menuItems.filter(item => item.status === "preparing");

  const renderItems = (items) => (
    items.map((item, index) => (
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
          <div className="order-text">Status : {item.status}</div>
        </div>
      </div>
    ))
  );

  return (
    <div className="body-bg">
      <div className="main-container">
        <section className="card">
          <h2 className="section-title">🍛 Live Menu</h2>
          {renderItems(liveItems)}
        </section>

        <section className="card">
          <h2 className="section-title">🔥 Preparing</h2>
          {renderItems(preparingItems)}
        </section>
      </div>

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
            <p><strong>Status:</strong> {selectedOrder.status}</p>
            <p><strong>Image:</strong> {selectedOrder.image}</p>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default Body;
