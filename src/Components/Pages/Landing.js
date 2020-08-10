import React from "react";
import { Container } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles((theme) => ({}));

export default function Landing() {
  //   const classes = useStyles();

  return (
    <div className="landing">
      <Container>
        <h1>Ben Shurts</h1>
        <h1>I like to make stuff for the web</h1>
      </Container>
    </div>
  );
}
