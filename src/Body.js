import React from 'react'
import './Body.css'

function Body() {
  return (
    <div class="body-bg">
      <div class="main-container">
        <section class="card">
          <h2 class="section-title">Live Orders</h2>
          <div class="order-card">
            <div class="order-info">
              <div>
                <span>OrderId : </span><span class="font-bold">APR002</span>
              </div>
              <div>
                <span class="tag">Snack</span>
              </div>
            </div>
            <div class="order-info">
              <div class="order-text">Items : 06</div>
              <div class="order-text">Total Amount : Rs:149</div>
            </div>
          </div>

        </section>

        <section class="card">
          <h2 class="section-title">Preparing Orders</h2>
        </section>
        <section class="card">
          <h2 class="section-title">Ready to serve</h2>
          
        </section>
      </div>
    </div>
  )
}

export default Body
