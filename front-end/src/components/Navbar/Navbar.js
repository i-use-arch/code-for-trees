import React, { Component } from "react";
import { AppBar, Button, Toolbar, Typography, Grid } from "@material-ui/core";

class Navbar extends Component {
  render() {
    return (
      <AppBar
        // position="static"
        // style={{ background: "transparent", boxShadow: "none" }}
        id="navbar"
      >
        <Toolbar>
          <Typography className="toolbar-title">Code For Trees</Typography>
          <Button>hi</Button>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Navbar;
