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
  // const classes = useStyles();
  const { question, description } = props;

  return (
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
        <Button
          size="small"
          color="primary"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          Share
        </Button>
        <Button
          size="small"
          color="primary"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          Learn More
        </Button>
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
  );
}
