import React from "react";
import styled from "styled-components";

const Layout = (props) => (
  <div>
    <span>Toolbar, SideDrawer, Backdrop</span>
    <MainContent>{props.children}</MainContent>
  </div>
);

const MainContent = styled.main`
  margin-top: 16px;
`;

export default Layout;
