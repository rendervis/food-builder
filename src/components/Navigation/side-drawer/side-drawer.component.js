import React from "react";
import styled, { css, keyframes } from "styled-components";

import Logo from "../../../components/logo/logo.component";
import NavigationItems from "../navigation-items/navigation-items.component";

import BackDrop from "../../UI/backdrop/backdrop.component";

const SideDrawer = (props) => {
  return (
    <div>
      <BackDrop show={props.open} clicked={props.closed} />
      <Drawer close={!props.open} open={props.open}>
        <Logo mobileHeight />
        <nav>
          <NavigationItems />
        </nav>
      </Drawer>
    </div>
  );
};

const Drawer = styled.div`
  position: fixed;
  width: 280px;
  max-width: 70%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 200;
  background-color: white;
  padding: 32px 16px;
  box-sizing: border-box;
  transition: transform 0.3s ease-out;
  ${(props) =>
    props.open &&
    css`
      transform: translateX(0);
    `}
  ${(props) =>
    props.close &&
    css`
      transform: translateX(-100vw);
    `}

  @media (min-width: 500px) {
    display: none;
  }
`;

export default SideDrawer;
