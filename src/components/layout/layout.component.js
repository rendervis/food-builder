import React from "react";
import styled from "styled-components";

import Toolbar from "../Navigation/toolbar/toolbar.component";

const Layout = (props) => (
  <div>
    <Toolbar />
    <MainContent>{props.children}</MainContent>
  </div>
);

const MainContent = styled.main`
  margin-top: 72px;
`;

export default Layout;
