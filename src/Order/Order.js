import React from "react";
import OrderBreakdown from "../OrderBreakdown/OrderBreakdown";
import Total from "../Total/Total";

/*const USCurrencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
}); 
*/

export default class Order extends React.Component {
  render() {
    const summary = Object.keys(this.props.selected).map((feature, idx) => (
      <>
      <OrderBreakdown feature={feature} idx={idx} {...this.props} />
      <Total {...this.props} feature={feature} idx={idx} />
      </>
    ));

    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        {summary}
      </section> 
    );
  }
}
