import React, { Component } from "react";
import Question from "../components/Question";
import Navbar from "../components/Navbar";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Typography
} from "@material-ui/core";

class Problems extends Component {
  render() {
    return (
      <div id="problems">
        <Grid container>
          <Grid item xs={8}>
            <Grid container direction="column">
              <Grid item>
                <Question question="Question 1" description="Description 1" />
              </Grid>
              <Grid item>
                <Question question="Question 2" description="Description 2" />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Card style={{ margin: "1em" }}>
              <CardHeader avatar={<Avatar>S</Avatar>} title="Sam Wang" />
              <CardContent>
                <Typography style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Username: abc
                </Typography>
                <Typography style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Problems Solved: 0 / 2
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Problems;
