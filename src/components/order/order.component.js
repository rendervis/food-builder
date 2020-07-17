import React from "react";
import styled from "styled-components";

const Order = (props) => (
  <OrderStyled>
    <p>Ingredients: </p>
    <p>
      Price: <strong>USD</strong>
    </p>
  </OrderStyled>
);

const OrderStyled = styled.div`
  width: 80%;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 10px;
  margin: 10px auto;
  box-sizing: border-box;
`;
export default Order;
