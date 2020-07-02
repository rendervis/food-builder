import React from "react";

///////stateless components////
import Layout from "./components/layout/layout.component";
///////state full components///
import BurgerBuilder from "./containers/burger-builder/burger-builder.container";
const App = () => {
  return (
    <Layout>
      <BurgerBuilder></BurgerBuilder>
    </Layout>
  );
};

export default App;
