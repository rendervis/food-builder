import React, { Component } from "react";
import styled from "styled-components";

import Toolbar from "../Navigation/toolbar/toolbar.component";
import SideDrawer from "../Navigation/side-drawer/side-drawer.component";

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  sideDrawerClosedHandler = () => this.setState({ showSideDrawer: false });
  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <div>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer
          closed={this.sideDrawerClosedHandler}
          open={this.state.showSideDrawer}
        />
        <MainContent>{this.props.children}</MainContent>
      </div>
    );
  }
}

const MainContent = styled.main`
  margin-top: 72px;
`;

export default Layout;
