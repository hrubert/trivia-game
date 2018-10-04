import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';

// eslint-disable-next-line
const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});


function HighScores(props) {
    return (
    <Card>
      <CardContent>
      <Typography variant="headline" component="h2">
            High Scores:
        </Typography>
        <List>
          {props.scores.map(highScore => (
            <ListItem key={props.scores.indexOf(highScore)} dense button>
              <ListItemText primary={props.scores.indexOf(highScore) + 1}></ListItemText>
              <ListItemText primary={highScore.name} />
              {/* <ListItemText primary={'$' + highScore.score} />> */}
              
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


export default HighScores