import React from "react";
import styled, { css, keyframes } from "styled-components";

///////components//////
import BuildControl from "../build-control/build-control.component";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];
const BuildControls = (props) => (
  <StyledDiv>
    <p>Current price: {props.price.toFixed(2)}</p>
    {controls.map((ctrl) => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.type}
        added={() => props.ingredientAdded(ctrl.type)}
        removed={() => props.ingredientRemoved(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
      />
    ))}
    <OrderButton
      disabled={!props.purchasable}
      enabled={props.purchasable}
      onClick={props.ordered}
    >
      ORDER NOW
    </OrderButton>
  </StyledDiv>
);

const StyledDiv = styled.div`
  width: 100%;
  background-color: #cf8f2e;
  display: flex;
  flex-flow: column;
  align-items: center;
  box-shadow: 0 2px 1px #ccc;
  margin: auto;
  padding: 10px 0;
`;
const pulse = keyframes`
0% {
  transform: scale(1);
}
60% {
  transform: scale(1.025);
}
100% {
  transform: scale(1);
}
`;
const OrderButton = styled.button`
  background-color: #dad735;
  outline: none;
  cursor: pointer;
  border: 1px solid #966909;
  color: #966909;
  font-family: inherit;
  font-size: 1.2em;
  padding: 15px 30px;
  box-shadow: 2px 2px 2px #966909;
  /* animation: ${pulse} 2s ease-out; */

  &:hover {
    background-color: #a0db41;
    border: 1px solid #966909;
    color: #966909;
  }

  ${(props) =>
    props.disabled &&
    css`
      background-color: #c7c6c6;
      border: 1px solid #ccc;
      color: #888888;
      cursor: not-allowed;
      &:hover {
        background-color: #c7c6c6;
        border: 1px solid #966909;
        color: #888888;
      }
      &:not {
        animation: enable 0.3s linear;
      }
    `};
    ${(props) =>
      props.enabled &&
      css`
        animation: ${pulse} 0.75s linear;
      `};
  

`;

export default BuildControls;
