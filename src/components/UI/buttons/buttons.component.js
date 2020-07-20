import React from "react";
import styled, { css } from "styled-components";

export const Button = (props) => (
  <StyledButton {...props} onClick={props.clicked}>
    {props.children}
  </StyledButton>
);

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  color: black;
  outline: none;
  cursor: pointer;
  font: inherit;
  padding: 10px;
  margin: 10px;
  font-weight: bold;
  z-index: 102;

  ${(props) =>
    props.success &&
    css`
      color: #5c9210;
    `}
  ${(props) =>
    props.danger &&
    css`
      color: #944317;
    `}
  ${(props) =>
    props.disabled &&
    css`
      color: #ccc;
      cursor: not-allowed;
    `}
`;
