import React from "react";
import Choice from "../Choice/Choice";

export default class Selection extends React.Component {
  render() {
    const features = Object.keys(this.props.features).map((feature, idx) => (
      <Choice {...this.props} feature={feature} idx={idx} />
    ));

    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        {features}
      </form>
    );
  }
}
