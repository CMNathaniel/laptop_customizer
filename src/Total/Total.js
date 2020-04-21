import React from "react";
import "./Total.css";

const USCurrencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
}); 

export default class Total extends React.Component {
  render() {
   const total = Object.keys(this.props.selected).reduce(
   (acc, curr) => acc + this.props.selected[curr].cost,
   0
 );

  
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







