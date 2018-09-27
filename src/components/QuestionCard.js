import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

class QuestionCard extends React.Component {
//   const { classes } = props;
    constructor(props) {
        super(props);
    }

  render() {
    console.log(this.props.triviaList)
    let triviaQuestion = []
    if (this.props.triviaList  !== []) {
     triviaQuestion = this.props.triviaList.map( question => {
        return (
            <Card >
            <CardContent>
                <Typography color="textSecondary">
                Question {this.props.triviaList.indexOf(question) + 1}
                </Typography>
                <Typography variant="headline" component="h2">
                {question.question.replace(/&quot;/g,'"').replace(/&#039;/g,'\'')}
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant="outlined" >
                    A. {question.correct_answer}
                </Button>
                <Button variant="outlined" >
                    B. {question.incorrect_answers[0]}
                </Button>
                <Button variant="outlined" >
                    C. {question.incorrect_answers[1]}
                </Button>
                <Button variant="outlined" >
                    D. {question.incorrect_answers[2]}
                </Button>
            </CardActions>
            </Card>
        )
    })
    }
  return (
      <div>
        {triviaQuestion}          
      </div>
    );
    }
}

// QuestionCard.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default (QuestionCard);