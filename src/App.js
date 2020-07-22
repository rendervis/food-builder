import React from "react";
import { Route, Switch } from "react-router-dom";

///////components////

import Layout from "./components/layout/layout.component";

///////containers///
import BurgerBuilder from "./containers/burger-builder/burger-builder.container";
import Checkout from "./containers/checkout/checkout.container";
import Orders from "./containers/orders/orders.containers";
import Auth from "./containers/Auth/auth";

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={BurgerBuilder} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/orders" component={Orders} />
        <Route path="/auth" component={Auth} />
      </Switch>
    </Layout>
  );
};

export default App;
