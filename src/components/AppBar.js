import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  link: {
    textDecoration: "none",
    color: "white"
  }
};

function LoginAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor: "black"}}>
        <Toolbar>
          <Typography variant="title" color="inherit" className={classes.grow}>
            Who Wants To Be A Millionaire?
          </Typography>
          <Button color="inherit"><a style={styles.link} href="/">Home</a></Button>
          <Button color="inherit"><a style={styles.link} href="/play">Play</a></Button>
          <Button color="inherit"><a style={styles.link} href="/highscores">High Scores</a></Button>               
        </Toolbar>
      </AppBar>
    </div>
  );
}

LoginAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginAppBar);