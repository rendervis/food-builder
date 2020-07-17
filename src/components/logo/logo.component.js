import React from "react";
import styled, { css } from "styled-components";

import burgerLogo from "../../assets/images/burger-logo.png";
const Logo = (props) => (
  <LogoBackDrop {...props}>
    <img style={{ height: "100%" }} src={burgerLogo} alt="burger-logo" />
  </LogoBackDrop>
);

const LogoBackDrop = styled.div`
  background-color: rgba(0, 0, 0, 0);
  padding: 2px;
  height: 80%;
  box-sizing: border-box;
  ${(props) =>
    props.mobileHeight &&
    css`
      height: 10%;
      margin-bottom: 32px;
    `}
`;

export default Logo;
