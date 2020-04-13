import React, { Component } from "react";
import "./Total.css";

class Total extends Component {
  const total = Object.keys(this.state.selected).reduce(
   (acc, curr) => acc + this.state.selected[curr].cost,
   0
 );

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






