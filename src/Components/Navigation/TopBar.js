import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, IconButton } from "@material-ui/core";
import { ContactPhone } from "@material-ui/icons";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  },
}));

export default function TopBar(props) {
  const classes = useStyles();

  const toggleMenu = () => {
    props.toggleMenu();
  };
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={2} sm={2}>
          <IconButton onClick={toggleMenu} aria-label="menu">
            <MenuIcon />
          </IconButton>
        </Grid>
        <Grid item xs={8} sm={8}>
          <div className={classes.root}>Ben Shurts</div>
        </Grid>
        <Grid item xs={2} sm={2}>
          <IconButton onClick={toggleMenu} aria-label="menu">
            <ContactPhone />
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
}
