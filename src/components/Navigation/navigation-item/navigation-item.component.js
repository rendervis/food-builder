import React from "react";
import { NavLink } from "react-router-dom";

import styled, { css } from "styled-components";

const NavigationItem = ({ children, ...props }) => (
  <Item>
    <StyledLink to={props.link} exact>
      {children}
    </StyledLink>
  </Item>
);

const Item = styled.li`
  margin: 0;
  box-sizing: border-box;
  display: flex;
  height: 100%;
  width: auto;
  align-items: center;

  @media (max-width: 500px) {
    margin: 20px 0 0 0;
    display: block;
    width: 100%;
    box-sizing: border-box;
  }
`;

// const activeLink = css`
//   background-color: #8f5c2c;
//   border-bottom: 4px solid #40a4c8;
//   color: white;
//   /////????
//   @media (max-width: 500px) {
//     color: #40a4c8;
//   }
// `;

// const getLinkStyle = (props) => {
//   if (props.isActive) {
//     return activeLink;
//   }
// };

const StyledLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  padding: 0 10px 16px 10px;
  height: 100%;

  border-bottom: 4px solid transparent;
  box-sizing: border-box;
  display: block;
  z-index: 20;
  &.active {
    background-color: #8f5c2c;
    border-bottom: 4px solid #40a4c8;
  }

  &:hover {
    background-color: #8f5c2c;
    border-bottom: 4px solid #40a4c8;
  }

  @media (max-width: 500px) {
    color: #8f5c2c;
    width: 100%;
    display: block;
    box-sizing: border-box;
  }
`;

export default NavigationItem;
