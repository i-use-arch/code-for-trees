import React from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography
} from "@material-ui/core";
import { Link } from "react-router-dom";

export default function Question(props) {
  const { question, description } = props;

  return (
    <Link className="link" to="/Two-Sum">
      <Card className="question">
        <CardActionArea>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              {question}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions style={{ display: "inline" }}>
          <a href="https://facebook.com" target="_blank">
            <Button
              size="small"
              color="primary"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Share
            </Button>
          </a>
          <a href="https://teamtrees.org" target="_blank">
            <Button
              size="small"
              color="primary"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Learn More
            </Button>
          </a>
          <Link to="/Two-Sum">
            <Button
              size="small"
              color="primary"
              style={{ float: "right", fontFamily: "Montserrat, sans-serif" }}
            >
              Solve
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Link>
  );
}
