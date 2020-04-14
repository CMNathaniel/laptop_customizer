import React from "react";
import OrderBreakdown from "../OrderBreakdown/OrderBreakdown";

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
});

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
