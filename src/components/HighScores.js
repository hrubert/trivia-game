import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import firebase from './firebase'

// eslint-disable-next-line
const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

let highScoresList = [];

class HighScores extends React.Component {
 
  render() {
    const { classes } = this.props;
    return (
    <Card>
      <CardContent>
      <Typography variant="headline" component="h2">
            High Scores:
        </Typography>
        <List>
          {highScoresList.map(highScore => (
            <ListItem key={highScore.name} dense button className={classes.listItem}>
              <ListItemText primary={highScore.name} />
              <ListItemSecondaryAction>
                ${highScore.score}
                
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
        </CardContent>
    </Card>    
    );
  }
}

HighScores.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default HighScores