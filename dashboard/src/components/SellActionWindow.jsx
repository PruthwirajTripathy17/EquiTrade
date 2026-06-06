import React, { useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import GeneralContext from "./GeneralContext";
import "./SellActionWindow.css";

const SellActionWindow = ({ uid }) => {
  const context = useContext(GeneralContext);

  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0);

  const handleSellClick = () => {
    axios.post("https://equitrade-7eqx.onrender.com/newOrder", {
      name: uid,
      qty: stockQuantity,
      price: stockPrice,
      mode: "SELL",
    });

    context.closeSellWindow();
  };

  const handleCancelClick = () => {
    context.closeSellWindow();
  };

  return (
    <div className="container" id="sell-window">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              value={stockQuantity}
              onChange={(e) => setStockQuantity(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              step="0.05"
              value={stockPrice}
              onChange={(e) => setStockPrice(e.target.value)}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Amount ₹{stockQuantity * stockPrice}</span>

        <div>
          <Link className="btn btn-red" onClick={handleSellClick}>
            Sell
          </Link>

          <Link className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;