<<<<<<< HEAD
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
=======
import React, { Component } from "react";
import "./Selection.css";
import Choices from "./Choices.js";

class Selection extends Component {
  render() {
    return (
      <div className="Selection">
          <main>
          <form className="main__form">
            <h2>Customize your laptop</h2>
=            <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
            <h3><Choices /></h3>
          </legend>
          {options}
        </fieldset>
          </form>
          </main>
      </div>
    );
  }
}

  render() {
    const features = Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + "-" + idx;
      const options = this.props.features[feature].map(item => {
        const itemHash = slugify(JSON.stringify(item));
        return (
          <div key={itemHash} className="feature__item">
            <input
              type="radio"
              id={itemHash}
              className="feature__option"
              name={slugify(feature)}
              checked={item.name === this.state.selected[feature].name}
              onChange={e => this.updateFeature(feature, item)}
            />
            <label htmlFor={itemHash} className="feature__label">
              {item.name} ({USCurrencyFormat.format(item.cost)})
            </label>
          </div>
        );
      });

      return (
        <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
            <h3>{feature}</h3>
          </legend>
          {options}
        </fieldset>
      );
    });

export default Selection;
>>>>>>> 7f6ee6ca503dc8b754e68eddf2729009cde7abe0
