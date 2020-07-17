import React from "react";
import styled from "styled-components";

import Burger from "../../../components/burger/burger.component";
import { Button } from "../../UI/buttons/buttons.component";

const CheckoutSummary = (props) => {
  return (
    <CheckoutSummaryStyled>
      <h1>We hope it tastes well!!</h1>
      <div style={{ width: "100%", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button danger clicked={props.checkoutCancelled}>
        CANCEL
      </Button>
      <Button success clicked={props.checkoutContinue}>
        CONTINUE
      </Button>
    </CheckoutSummaryStyled>
  );
};

const CheckoutSummaryStyled = styled.div`
  text-align: center;
  width: 80%;
  margin: auto;
  @media (min-width: 600px) {
    width: 500px;
  }
`;

export default CheckoutSummary;
