import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import logo from "./images/logo.png"

const styles = {
  image: {
    width: '50%',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingTop: '10rem'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
};

function SimpleCard(props) {
  return (
    <div>
        <img src={logo} alt='logo' style={styles.image}/>
    </div>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);