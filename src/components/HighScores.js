import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Typography from '@material-ui/core/Typography';

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
    <div>
      <div>
            <h2 style={{textAlign: 'center', color: 'white'}}>High Scores:</h2>
        </div>
        <List style={{maxWidth: '500px', margin: '0 auto'}}>
          {props.scores.map(highScore => (
            <ListItem key={props.scores.indexOf(highScore)} dense button>
              <Typography variant="subheading" dense button style={{color: 'white'}}>
                    {props.scores.indexOf(highScore) + 1}. {highScore.name}               
                </Typography>
              <ListItemSecondaryAction>
                <Typography variant="subheading" dense button style={{color: 'white'}}>
                    ${highScore.score}                
                </Typography>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
    </div>
  );
}


export default HighScores