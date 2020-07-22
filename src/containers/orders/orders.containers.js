import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "../../store/actions/index";
import Spinner from "../../components/UI/spinner/spinner.component";

import Order from "../../components/order/order.component";

class Orders extends Component {
  componentDidMount() {
    this.props.onFetchOrders();
  }

  render() {
    let orders = <Spinner />;
    if (!this.props.loading) {
      orders = this.props.orders.map((order) => (
        <Order
          key={order.id}
          ingredients={order.ingredients}
          price={order.price}
        />
      ));
    }
    return <div>{orders}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    orders: state.order.orders,
    loading: state.order.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchOrders: () => dispatch(action.fetchOrder()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
