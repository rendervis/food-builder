import React, { Component } from "react";

import Burger from "../../components/burger/burger.component";

class BurgerBuilder extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {

  //   }

  // }
  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 0,
      meat: 3,
    },
  };
  render() {
    return (
      <div>
        <Burger ingredients={this.state.ingredients} />
        <div>Build Controls</div>
      </div>
    );
  }
}

export default BurgerBuilder;
