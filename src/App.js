import React, { Component } from "react";
import Selection from "./Selection/Selection";
import Order from "./Order/Order";
import "./App.css";

class App extends Component {
  state = {
    selected: [
      {
        section: "Processor", 
        name: "17th Generation Intel Core HB (7 Core with donut spare)",
        cost: 700,
      },
      {
        section: "Operating System", 
        name: "Ubuntu Linux 16.04",
        cost: 200,
      },
      {
        section: "Video Card", 
        name: "Toyota Corolla 1.5v",
        cost: 1150.98,
      },
      {
        section: "Display", 
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500,
      }
    ]
  };

  updateFeature = section => {
    let features = this.props.features;
    features[section].selected = !features[section].selected;
    this.setState({features});
  };


  render() {
    return (
      <div className="App">
        <header>
          <h1>ELF Computing | Laptops</h1>
        </header>
        <main>
          <Selection
            {...this.props}
            {...this.state}
            updateFeature={this.updateFeature}
          />
          <Order {...this.props} {...this.state} />
        </main>
      </div>
    );
  }
}

export default App;
