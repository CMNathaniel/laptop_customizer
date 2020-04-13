import React, { Component } from "react";
import "./Order.css";
import Total from "./Total.js";
import OrderBreakdown from "./OrderBreakdown.js";

class Order extends Component {
const USCurrencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
});

  render() {
    return (
      <div className="Order">
         <section className="main__summary">
            <h2>Your cart</h2>
        <Total />
        <OrderBreakdown />
      </div>
    );
  }
}

export default Order;
