import React from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ContactPhone from '@material-ui/icons/ContactPhone'
import InsertChart from '@material-ui/icons/InsertChart'
import Tonality from '@material-ui/icons/Tonality'
import $ from 'jquery'


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

var canUseFiftyFifty;


class QuestionCard extends React.Component {
//   const { classes } = props;
    constructor(props) {
        super(props);
    }


    handleToggle = () => {
        const el = findDOMNode(this.refs.toggle);
        $(el).slideToggle();
        const el2 = findDOMNode(this.refs.toggle2);
        $(el2).slideToggle();
        canUseFiftyFifty = false;
    };

  render() {
    canUseFiftyFifty = this.props.fiftyFifty
    let triviaQuestion = []

    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array;
      }
    
    if (this.props.currentQuestion !== undefined) {
        
        if (this.props.phoneAFriend) {
            var friendButton = <IconButton className="" aria-label="Phone A Friend"><ContactPhone /></IconButton>
        } else {
            var friendButton = '';
        }

        if (this.props.fiftyFifty) {
            var fiftyButton = <IconButton aria-label="50-50" onClick={this.handleToggle}><Tonality /></IconButton>
        } else {
            var fiftyButton = '';
        }

        if (this.props.askTheAud) {
            var askButton = <IconButton  aria-label="Poll The Audience"><InsertChart /></IconButton>
        } else {
            var askButton = '';
        }


        let answerChoices = shuffle([{answer: this.props.currentQuestion.correct_answer, correct: true, ref: ''},
            {answer: this.props.currentQuestion.incorrect_answers[0], correct: false, ref: 'toggle'},
            {answer: this.props.currentQuestion.incorrect_answers[1], correct: false, ref: 'toggle2'},
            {answer: this.props.currentQuestion.incorrect_answers[2], correct: false, ref: ''}])
        triviaQuestion = (
            <Card key={this.props.questionNum}>
            <CardContent>
                <div>
                    {friendButton}
                    {fiftyButton}
                    {askButton}
                </div>
                <Typography color="textSecondary">
                Question {this.props.questionNum + 1}
                </Typography>
                <Typography variant="headline" component="h2">
                {this.props.currentQuestion.question.replace(/&quot;/g,'"').replace(/&#039;/g,'\'').replace(/&DEG;/g,'°').replace(/&amp;/g, '&').replace(/&eacute;/g,'é').replace(/&Uuml;/g, 'Ü').replace(/&rsquo;/g, '\'').replace(/&oacute;/g, 'ó')}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    onClick={() => this.props.handleAnswer(this.props.questionNum, answerChoices[0].correct, canUseFiftyFifty)}
                    variant="outlined" 
                    ref={answerChoices[0].ref}
                    >
                    A. {answerChoices[0].answer.replace(/&quot;/g,'"').replace(/&#039;/g,'\'').replace(/&DEG;/g,'°').replace(/&amp;/g, '&').replace(/&eacute;/g,'é').replace(/&Uuml;/g, 'Ü').replace(/&rsquo;/g, '\'').replace(/&oacute;/g, 'ó')}
                </Button>
                <Button 
                    variant="outlined"  
                    onClick={() => this.props.handleAnswer(this.props.questionNum, answerChoices[1].correct, canUseFiftyFifty)}
                    ref={answerChoices[1].ref}                    
                    >
                    B. {answerChoices[1].answer.replace(/&quot;/g,'"').replace(/&#039;/g,'\'').replace(/&DEG;/g,'°').replace(/&amp;/g, '&').replace(/&eacute;/g,'é').replace(/&Uuml;/g, 'Ü').replace(/&rsquo;/g, '\'').replace(/&oacute;/g, 'ó')}
                </Button>
                <Button variant="outlined"
                    onClick={() => this.props.handleAnswer(this.props.questionNum, answerChoices[2].correct, canUseFiftyFifty)}
                    ref={answerChoices[2].ref}                    
                    >
                    C. {answerChoices[2].answer.replace(/&quot;/g,'"').replace(/&#039;/g,'\'').replace(/&DEG;/g,'°').replace(/&amp;/g, '&').replace(/&eacute;/g,'é').replace(/&Uuml;/g, 'Ü').replace(/&rsquo;/g, '\'').replace(/&oacute;/g, 'ó')}
                </Button>
                <Button 
                    variant="outlined"
                    onClick={() => this.props.handleAnswer(this.props.questionNum, answerChoices[3].correct, canUseFiftyFifty)}
                    ref={answerChoices[3].ref}                                         
                    >
                    D. {answerChoices[3].answer.replace(/&quot;/g,'"').replace(/&#039;/g,'\'').replace(/&DEG;/g,'°').replace(/&amp;/g, '&').replace(/&eacute;/g,'é').replace(/&Uuml;/g, 'Ü').replace(/&rsquo;/g, '\'').replace(/&oacute;/g, 'ó')}
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