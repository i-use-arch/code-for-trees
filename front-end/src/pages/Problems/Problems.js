import React, { Component } from "react";
import Question from "./components/Question";
import { Grid } from "@material-ui/core";

class Problems extends Component {
  render() {
    return (
      <div>
        <Grid
          container
          direction="column"
          justify="space-evenly"
          alignItems="center"
        >
          <Grid item>
            <Question question="Question 1" description="Description 1" />
          </Grid>
          <Grid item>
            <Question question="Question 2" description="Description 2" />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Problems;
