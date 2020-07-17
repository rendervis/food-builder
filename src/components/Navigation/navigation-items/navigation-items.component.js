import React from "react";

import styled, { css } from "styled-components";

import NavigationItem from "../navigation-item/navigation-item.component";

const NavigationItems = () => (
  <Items>
    <NavigationItem link="/">Burger Builder</NavigationItem>
    <NavigationItem link="/orders">ORDERS</NavigationItem>
  </Items>
);

const Items = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  height: 100%;
  z-index: 201;

  @media (max-width: 500px) {
    flex-flow: column;
  }
`;

export default NavigationItems;
