import React from "react";

import { Button } from "../../UI/buttons/buttons.component";

const OrderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}:</span>

        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <div>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>

      <p>
        Total price: <strong>{props.price.toFixed(2)}</strong>
      </p>
      <p>Continue to Checkout?</p>
      <Button danger clicked={props.purchaseCancelled}>
        CANCEL
      </Button>
      <Button success clicked={props.purchaseContinued}>
        CONTINUE
      </Button>
    </div>
  );
};

export default OrderSummary;
