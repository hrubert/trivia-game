import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
// import firebase from './firebase'

// var db = firebase.firestore();

// db.settings({
//     timestampsInSnapshots: true
// });

// let scoresRef = db.collection('scores');

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

class HighScores extends React.Component {
 
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
      <Typography variant="headline" component="h2">
            High Scores:
        </Typography>
        <List>
          {this.props.highScoreList.map(highScore => (
            <ListItem key={highScore.name} dense button className={classes.listItem}>
              <ListItemText primary={highScore.name} />
              <ListItemSecondaryAction>
                ${highScore.score}
                
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

HighScores.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HighScores);