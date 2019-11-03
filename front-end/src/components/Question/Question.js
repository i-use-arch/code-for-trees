import React from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography
} from "@material-ui/core";

export default function Question(props) {
  // const classes = useStyles();
  const { question, description } = props;

  return (
    <Card style={{ margin: "1em" }}>
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
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            {description}
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
        <Button
          size="small"
          color="primary"
          style={{ float: "right", fontFamily: "Montserrat, sans-serif" }}
        >
          Solve
        </Button>
      </CardActions>
    </Card>
  );
}
