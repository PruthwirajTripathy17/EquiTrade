import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../config/api";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/allOrders`)
      .then((res) => {
        setAllOrders(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="orders">
      {allOrders.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>

          <button type="button" className="btn">
            Get Started
          </button>
        </div>
      ) : (
        <table>
          <thead >
            <tr>
              <th>Stock</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Mode</th>
            </tr>
          </thead>
          <tbody>
            {allOrders.map((order, index) => (
              <tr key={index}>
                <td>{order.name}</td>
                <td>{order.qty}</td>
                <td>₹{order.price}</td>
                <td>{order.mode}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Orders;