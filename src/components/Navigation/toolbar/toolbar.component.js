import React from "react";
import styled from "styled-components";

import Logo from "../../logo/logo.component";
import NavigationItems from "../../Navigation/navigation-items/navigation-items.component";
import DrawerToggle from "../side-drawer/drawer-toggle/drawer-toggle.component";

const Toolbar = (props) => (
  <Header>
    <DrawerToggle clicked={props.drawerToggleClicked} />
    <Logo />
    <ToolbarNav>
      <NavigationItems />
    </ToolbarNav>
  </Header>
);

const Header = styled.header`
  height: 56px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #703b09;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  z-index: 90;
`;

const ToolbarNav = styled.nav`
  @media (max-width: 499px) {
    display: none;
  }
`;

export default Toolbar;
