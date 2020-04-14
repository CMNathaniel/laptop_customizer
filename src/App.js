<<<<<<< HEAD
import React, { Component } from "react";

import Selection from "./Selection/Selection";
import Order from "./Order/Order";

import "./App.css";
=======
import React, { Component } from 'react';
import slugify from 'slugify';
import './App.css';
import Selection from "./Selection.js";
import Order from "./Order.js";
>>>>>>> 7f6ee6ca503dc8b754e68eddf2729009cde7abe0

class App extends Component {
  state = {
    selected: {
      Processor: {
        name: "17th Generation Intel Core HB (7 Core with donut spare)",
        cost: 700
      },
      "Operating System": {
        name: "Ubuntu Linux 16.04",
        cost: 200
      },
      "Video Card": {
        name: "Toyota Corolla 1.5v",
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };

  render() {
    return (
      <div className="App">
        <header>
          <h1>ELF Computing | Laptops</h1>
        </header>
<<<<<<< HEAD
        <main>
          <Selection
            {...this.props}
            {...this.state}
            updateFeature={this.updateFeature}
          />
          <Order {...this.props} {...this.state} />
        </main>
=======
        <Selection features={this.state.features} />
        <Order features={this.state.features} />
>>>>>>> 7f6ee6ca503dc8b754e68eddf2729009cde7abe0
      </div>
    );
  }
}

export default App;
