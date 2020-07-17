import React, { Component } from "react";

import Order from "../../components/order/order.component";

class Orders extends Component {
  state = {
    orders: [],
    loading: true,
  };

  render() {
    return (
      <div>
        <Order />
        <Order />
      </div>
    );
  }
}

export default Orders;