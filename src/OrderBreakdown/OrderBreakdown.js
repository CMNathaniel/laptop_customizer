<<<<<<< HEAD
import React from "react";

const USCurrencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
});

export default class Order extends React.Component {
  render() {
    const featureHash = this.props.feature + "-" + this.props.idx;
    const selectedOption = this.props.selected[this.props.feature];

    return (
      <div className="summary__option" key={featureHash}>
        <div className="summary__option__label">{this.props.feature} </div>
        <div className="summary__option__value">{selectedOption.name}</div>
        <div className="summary__option__cost">
          {USCurrencyFormat.format(selectedOption.cost)}
        </div>
=======
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
>>>>>>> 7f6ee6ca503dc8b754e68eddf2729009cde7abe0
      </div>
    );
  }
}
<<<<<<< HEAD
=======

export default Total;
>>>>>>> 7f6ee6ca503dc8b754e68eddf2729009cde7abe0
