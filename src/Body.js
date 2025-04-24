import React, { useState } from 'react';
import { Modal } from 'antd';
import './Body.css';

function Body() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const showModal = (orderId) => {
    setSelectedOrder(orderId);
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
          <h2 className="section-title">Live Orders</h2>
          <div className="order-card" onClick={() => showModal('APR002')}>
            <div className="order-info">
              <div>
                <span>OrderId : </span><span className="font-bold">APR002</span>
              </div>
              <div>
                <span className="tag">Snack</span>
              </div>
            </div>
            <div className="order-info">
              <div className="order-text">Items : 06</div>
              <div className="order-text">Total Amount : Rs:149</div>
            </div>
          </div>

          <div className="order-card" onClick={() => showModal('APR003')}>
            <div className="order-info">
              <div>
                <span>OrderId : </span><span className="font-bold">APR003</span>
              </div>
              <div>
                <span className="tag">Snack</span>
              </div>
            </div>
            <div className="order-info">
              <div className="order-text">Items : 04</div>
              <div className="order-text">Total Amount : Rs:99</div>
            </div>
          </div>
        </section>

        <section className="card">
          <h2 className="section-title">Preparing Orders</h2>
          <div className="order-card" onClick={() => showModal('APR004')}>
            <div className="order-info">
              <div>
                <span>OrderId : </span><span className="font-bold">APR004</span>
              </div>
              <div>
                <span className="tag">Snack</span>
              </div>
            </div>
            <div className="order-info">
              <div className="order-text">Items : 06</div>
              <div className="order-text">Total Amount : Rs:149</div>
            </div>
          </div>
        </section>

        <section className="card">
          <h2 className="section-title">Ready to serve</h2>
          {/* You can add order-cards here with onClick if needed */}
        </section>
      </div>

      {/* Modal */}
      <Modal
        title={`Order Details: ${selectedOrder}`}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>More details about order {selectedOrder}...</p>
      </Modal>
    </div>
  );
}

export default Body;
