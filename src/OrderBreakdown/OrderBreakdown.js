import React, { Component } from "react";
import "./OrderBreakdown.css";

class OrderBreakdown extends Component {
  render() {
    return (
      <div className="Order">
        <div className="summary__total">
          <div className="summary__total__label">Total</div>
          <div className="summary__total__value">
            {USCurrencyFormat.format(total)}
          </div>
        </div>
        ;
      </div>
    );
  }
}

export default Total;
