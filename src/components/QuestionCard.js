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
    let triviaQuestion = []
    if (this.props.currentQuestion !== undefined) {
     triviaQuestion = (
            <Card key={this.props.questionNum}>
            <CardContent>
                <Typography color="textSecondary">
                Question {this.props.questionNum + 1}
                </Typography>
                <Typography variant="headline" component="h2">
                {this.props.currentQuestion.question.replace(/&quot;/g,'"').replace(/&#039;/g,'\'').replace(/&DEG;/g,'°').replace(/&amp;/g, '&')}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    onClick={() => this.props.handleCorrect(this.props.questionNum)}
                    variant="outlined" >
                    A. {this.props.currentQuestion.correct_answer}
                </Button>
                <Button 
                    variant="outlined" 
                    onClick={() => this.props.handleWrong(this.props.questionNum)}
                    >
                    B. {this.props.currentQuestion.incorrect_answers[0]}
                </Button>
                <Button variant="outlined"
                    onClick={() => this.props.handleWrong(this.props.questionNum)}
                    >
                    C. {this.props.currentQuestion.incorrect_answers[1]}
                </Button>
                <Button 
                    variant="outlined"
                    onClick={() => this.props.handleWrong(this.props.questionNum)}                    
                    >
                    D. {this.props.currentQuestion.incorrect_answers[2]}
                </Button>
            </CardActions>
            </Card>
        )
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