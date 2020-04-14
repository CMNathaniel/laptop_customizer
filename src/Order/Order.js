<<<<<<< HEAD
import React from "react";
import OrderBreakdown from "../OrderBreakdown/OrderBreakdown";

// This object will allow us to
// easily convert numbers into US dollar values
=======
import React, { Component } from "react";
import "./Order.css";
import Total from "./Total.js";
import OrderBreakdown from "./OrderBreakdown.js";

class Order extends Component {
>>>>>>> 7f6ee6ca503dc8b754e68eddf2729009cde7abe0
const USCurrencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
});

<<<<<<< HEAD
export default class Order extends React.Component {
  render() {
    const summary = Object.keys(this.props.selected).map((feature, idx) => (
      <OrderBreakdown feature={feature} idx={idx} {...this.props} />
    ));

    const total = Object.keys(this.props.selected).reduce(
      (acc, curr) => acc + this.props.selected[curr].cost,
      0
    );

    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        {summary}

        <div className="summary__total">
          <div className="summary__total__label">Total</div>
          <div className="summary__total__value">
            {USCurrencyFormat.format(total)}
          </div>
        </div>
      </section>
    );
  }
}
=======
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
>>>>>>> 7f6ee6ca503dc8b754e68eddf2729009cde7abe0
