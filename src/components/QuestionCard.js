import React from 'react';
import { findDOMNode } from 'react-dom';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Tonality from '@material-ui/icons/Tonality';
import $ from 'jquery';
import AlertDialogue from './AlertDialogue';
import AlertDialoguePoll from './AlertDialoguePoll';
import Tooltip from '@material-ui/core/Tooltip';
import logo from './images/logo.png'

// eslint-disable-next-line
const styles = {
  card: {
    minWidth: 275,
  },
  question: {
    borderRadius: '5em',
    backgroundColor: 'rgb(39, 20, 122)',
    border: '3px solid rgb(195, 195, 186)',
    color: 'white'
  },
  button: {
    width: '50%',
    borderRadius: '5em',
    backgroundColor: 'rgb(39, 20, 122)',
    border: '3px solid rgb(195, 195, 186)',
    color: 'white'
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  image: {
    width: '20%',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingTop: '.5rem',
    paddingBottom: '.5rem'    
  },
};

var canUseFiftyFifty, canUsePhoneAFriend, canUsePoll;


class QuestionCard extends React.Component {

    handleToggle = () => {
        const el = findDOMNode(this.refs.toggle);
        $(el).slideToggle();
        const el2 = findDOMNode(this.refs.toggle2);
        $(el2).slideToggle();
        canUseFiftyFifty = false;
    }

    handlePhone = () => {
        canUsePhoneAFriend = false;
    }

    handlePoll = () => {
        canUsePoll = false;
    }

  render() {
    canUseFiftyFifty = this.props.fiftyFifty;
    canUsePhoneAFriend = this.props.phoneAFriend;
    canUsePoll = this.props.askTheAud;
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
            var friendButton = <AlertDialogue currentQuestion={this.props.questionNum} answer={this.props.currentQuestion.correct_answer} onPhone={this.handlePhone.bind(this)}/>
        } else {
            // eslint-disable-next-line
            var friendButton = '';
        }

        if (this.props.fiftyFifty) {
            var fiftyButton = <Tooltip title="Fifty-fifty"><IconButton aria-label="50-50" onClick={this.handleToggle}><Tonality style={{color: 'white'}}/></IconButton></Tooltip>
        } else {
            // eslint-disable-next-line
            var fiftyButton = '';
        }

        if (this.props.askTheAud) {
            var askButton = <AlertDialoguePoll currentQuestion={this.props.questionNum} answer={this.props.currentQuestion.correct_answer} wrongAns={this.props.currentQuestion.incorrect_answers}onPoll={this.handlePoll.bind(this)}/>
        } else {
            // eslint-disable-next-line
            var askButton = '';
        }


        let answerChoices = shuffle([{answer: this.props.currentQuestion.correct_answer, correct: true, ref: ''},
            {answer: this.props.currentQuestion.incorrect_answers[0], correct: false, ref: 'toggle'},
            {answer: this.props.currentQuestion.incorrect_answers[1], correct: false, ref: 'toggle2'},
            {answer: this.props.currentQuestion.incorrect_answers[2], correct: false, ref: ''}])
        triviaQuestion = (
            <div>
            <CardContent>
                <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                    {fiftyButton}
                    {friendButton}
                    {askButton}
                </div>
                <div>
                    <img src={logo} alt='logo' style={styles.image}/>
                </div>
                <div style={styles.question}>
                    <Typography variant="headline" component="h2" style={{marginTop: '.5em', marginBottom: '.5em', color: 'white', textAlign: 'center'}}>
                    <span style={{color: 'rgb(249, 149, 17)'}}>{this.props.questionNum + 1}:  &nbsp;</span>
                    {this.props.currentQuestion.question.replace(/&quot;/g,'"').replace(/&#039;/g,'\'').replace(/&DEG;/g,'°').replace(/&amp;/g, '&').replace(/&eacute;/g,'é').replace(/&Uuml;/g, 'Ü').replace(/&rsquo;/g, '\'').replace(/&oacute;/g, 'ó').replace(/&shy;/g, '-').replace(/&ldquo;/g, '"')}
                    </Typography>
                </div>
            </CardContent>
            <CardActions >
                <Button
                    style={styles.button}
                    onClick={() => this.props.handleAnswer(this.props.questionNum, answerChoices[0].correct, canUseFiftyFifty, canUsePhoneAFriend, canUsePoll)}
                    variant="outlined" 
                    // className="buttonBorder"
                    ref={answerChoices[0].ref}
                    >
                    <span style={{color: 'rgb(249, 149, 17)'}}>A:  &nbsp;</span> {answerChoices[0].answer.replace(/&quot;/g,'"').replace(/&#039;/g,'\'').replace(/&DEG;/g,'°').replace(/&amp;/g, '&').replace(/&eacute;/g,'é').replace(/&Uuml;/g, 'Ü').replace(/&rsquo;/g, '\'').replace(/&oacute;/g, 'ó').replace(/&shy;/g, '-').replace(/&ldquo;/g, '"')}
                </Button>
                <Button 
                    style={styles.button}
                    variant="outlined"  
                    onClick={() => this.props.handleAnswer(this.props.questionNum, answerChoices[1].correct, canUseFiftyFifty, canUsePhoneAFriend, canUsePoll)}
                    ref={answerChoices[1].ref}                    
                    >
                    <span style={{color: 'rgb(249, 149, 17)'}}>B:  &nbsp;</span> {answerChoices[1].answer.replace(/&quot;/g,'"').replace(/&#039;/g,'\'').replace(/&DEG;/g,'°').replace(/&amp;/g, '&').replace(/&eacute;/g,'é').replace(/&Uuml;/g, 'Ü').replace(/&rsquo;/g, '\'').replace(/&oacute;/g, 'ó').replace(/&shy;/g, '-').replace(/&ldquo;/g, '"')}
                </Button>
            </CardActions>   
            <CardActions >                     
                <Button variant="outlined"
                    style={styles.button}                    
                    onClick={() => this.props.handleAnswer(this.props.questionNum, answerChoices[2].correct, canUseFiftyFifty, canUsePhoneAFriend, canUsePoll)}
                    ref={answerChoices[2].ref}                    
                    >
                    <span style={{color: 'rgb(249, 149, 17)'}}>C:  &nbsp;</span> {answerChoices[2].answer.replace(/&quot;/g,'"').replace(/&#039;/g,'\'').replace(/&DEG;/g,'°').replace(/&amp;/g, '&').replace(/&eacute;/g,'é').replace(/&Uuml;/g, 'Ü').replace(/&rsquo;/g, '\'').replace(/&oacute;/g, 'ó').replace(/&shy;/g, '-').replace(/&ldquo;/g, '"')}
                </Button>
                <Button 
                    style={styles.button}                    
                    variant="outlined"
                    onClick={() => this.props.handleAnswer(this.props.questionNum, answerChoices[3].correct, canUseFiftyFifty, canUsePhoneAFriend, canUsePoll)}
                    ref={answerChoices[3].ref}                                         
                    >
                    <span style={{color: 'rgb(249, 149, 17)'}}>D:  &nbsp;</span> {answerChoices[3].answer.replace(/&quot;/g,'"').replace(/&#039;/g,'\'').replace(/&DEG;/g,'°').replace(/&amp;/g, '&').replace(/&eacute;/g,'é').replace(/&Uuml;/g, 'Ü').replace(/&rsquo;/g, '\'').replace(/&oacute;/g, 'ó').replace(/&shy;/g, '-').replace(/&ldquo;/g, '"')}
                </Button>
            </CardActions>               
            </div>
        )
    }
  return (
      <div>
        {triviaQuestion}    
        
      </div>
    );
    }
}


export default (QuestionCard);