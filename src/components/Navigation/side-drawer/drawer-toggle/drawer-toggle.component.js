import React from "react";
import styled from "styled-components";

const DrawerToggle = (props) => (
  <ToggleWrapper onClick={props.clicked}>
    <Toggle />
    <Toggle />
    <Toggle />
  </ToggleWrapper>
);

const ToggleWrapper = styled.div`
  width: 20px;
  height: 40px;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
  box-sizing: border-box;
  cursor: pointer;
  @media (min-width: 500px) {
    display: none;
  }
`;

const Toggle = styled.div`
  width: 90%;
  height: 3px;
  background-color: white;
`;

export default DrawerToggle;
