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
      <div>
            <h2 style={{textAlign: 'center'}}>High Scores:</h2>
        </div>
        <List style={{maxWidth: '500px', margin: '0 auto'}}>
          {props.scores.map(highScore => (
            <ListItem key={props.scores.indexOf(highScore)} dense button>
              <ListItemText primary={props.scores.indexOf(highScore) + 1}></ListItemText>
              <ListItemText primary={highScore.name} />
              
              <ListItemSecondaryAction>
                <Typography variant="subheading" gutterBottom>
                    ${highScore.score}                
                </Typography>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
        </CardContent>
    </Card>    
  );
}


export default HighScores