import React from "react";
import slugify from "slugify";

const USCurrencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
});

export default class Choice extends React.Component {

  render() {
    console.log("this is props", this.props);
    console.log("this is state", this.state);

    const featureHash = this.props.feature + "-" + this.props.idx;
    const options = this.props.features[this.props.feature].map(item => {
      const itemHash = slugify(JSON.stringify(item));
      return (
        
        <div key={itemHash} className="feature__item">
          <input
            type="radio"
            id={itemHash}
            className="feature__option"
            name={slugify(this.props.feature)}
            checked={item.name === this.props.selected[this.props.feature].name}  
            onChange={e => this.props.updateFeature(this.props.feature)}
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
          <h3>{this.props.feature}</h3>
        </legend>
        {options}
      </fieldset>
    );
  }
}
