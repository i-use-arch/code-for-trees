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

  state={}

  constructor(props) {
    super(props);
    this.state = {
      numTrees: 6420,
    }
  }

  renderTable = () => {

    const Entry = class {
      constructor(rank, name, trees) {
        this.rank = rank;
        this.name = name;
        this.trees = trees;
      }
    }

    let rank = 1;
    const entries = [
      new Entry("Rank", "Name", "Number of Trees"),
      new Entry(rank++, "Joel 👑", "24"),
      new Entry(rank++, "Sam", "21"),
      new Entry(rank++, "Nathan", "19"),
      new Entry(rank++, "David", "19"),
      new Entry(rank++, "Lauren", "17"),
      new Entry(rank++, "John", "16"),
      new Entry(rank++, "Timothy", "15"),
      new Entry(rank++, "Sanjay", "13"),
      new Entry(rank++, "Emily", "10"),
      new Entry(rank++, "Sarah", "6"),
    ]

    let result = [];
    entries.map(entry => (
      result.push(
        <tr>
          <td>{entry.rank}</td>
          <td>{entry.name}</td>
          <td>{entry.trees}</td>
        </tr>
      )
    ));
    return <table>{result}</table>;
  }

  render() {
    return (
      <div id="problems">
        <Grid container>
          <Grid item xs={8}>
            <Grid container direction="column">
              <Grid item>
                <Question question="Two Sum"/>
              </Grid>
              <Grid item>
                <Question question="Binary Tree Level Order Traversal"/>
              </Grid>
              <Grid item>
                <Question question="Invert Binary Tree" />
              </Grid>
              <Grid item>
                <Question question="Maximum Depth of Binary Tree" />
              </Grid>
              <Grid item>
                <Question question="Balanced Binary Tree" />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Card className="right-card">
              <CardContent>
                <div className="right-panel">
                  <h1>NUMBER OF TREES PLANTED</h1>
                  <div className="separator">
                    <h2>{this.state.numTrees}</h2>
                  </div>
                  {this.renderTable()}
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Problems;
