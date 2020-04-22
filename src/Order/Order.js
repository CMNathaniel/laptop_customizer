import React from "react";
import OrderBreakdown from "../OrderBreakdown/OrderBreakdown";
import Total from "../Total/Total";


export default class Order extends React.Component {
  render() {
    const summary = Object.keys(this.props.selected).map((feature, idx) => (
      <>
      <OrderBreakdown feature={feature} idx={idx} {...this.props} />
      <Total {...this.props} selected={this.props.selected} feature={feature} idx={idx} />
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
