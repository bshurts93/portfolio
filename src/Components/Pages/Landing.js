import React from "react";
import { Container } from "@material-ui/core";
import { Example } from "../Framer/Example";
import { PathExample } from "../Framer/PathExample";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  example: {
    background: "white",
    borderRadius: "30px",
    width: "150px",
    height: "150px",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

export default function Landing() {
  const classes = useStyles();

  return (
    <div>
      <Container>
        <h3>Ben Shurts</h3>
        <h3>I like to make stuff for the web</h3>
        <Example />
        <PathExample />
      </Container>
    </div>
  );
}
