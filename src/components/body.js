import React, { Component } from 'react';
import QuestionCard from './QuestionCard';
import CurrentMoney from './CurrentMoney';
import { connect } from 'react-redux';
import { fetchData, answer, nameEnter } from "../actions/index";

const mapStateToProps = (state) => {
  return {
    triviaList: state.triviaList,
    currentQuestion: state.currentQuestion,
    updateTrivia: state.updateTrivia,
    highScores: state.highScores,
    phoneAFriend: state.phoneAFriend,
    fiftyFifty: state.fiftyFifty,
    askTheAud: state.askTheAud,
    name: state.name
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetch: (data) => dispatch(fetchData(data)),
    onAnswer: (num, ans, correct, fiftyFifty, phoneAFriend, askTheAud) => dispatch(answer(num, ans, correct, fiftyFifty, phoneAFriend, askTheAud)),
    onName: (name) => dispatch(nameEnter(name))
  }
}

class Body extends Component {
     
    componentWillMount() {
        try {
            // this.props.onName(prompt("What name would you like to use for high scores?", "Anonymous"))
        }
        catch(err) {
            this.props.onName('Anonymous')            
        }
    }
    
    render() {
        if(this.props.updateTrivia === true) {
            fetch('https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple')
            .then((response => response.json()))
            .then(response => this.props.onFetch(response))
            fetch('https://opentdb.com/api.php?amount=5&difficulty=medium&type=multiple')
            .then((response => response.json()))
            .then(response => this.props.onFetch(response))
            fetch('https://opentdb.com/api.php?amount=5&difficulty=hard&type=multiple')
            .then((response => response.json()))
            .then(response => this.props.onFetch(response))

        }

        return (
            <div>
                <QuestionCard questionNum={this.props.currentQuestion} 
                    currentQuestion={this.props.triviaList[this.props.currentQuestion]}
                    handleAnswer={this.props.onAnswer}
                    handleWrong={this.props.onWrong}
                    phoneAFriend={this.props.phoneAFriend}
                    fiftyFifty={this.props.fiftyFifty}
                    askTheAud={this.props.askTheAud}
                    />
                <CurrentMoney questionNum={this.props.currentQuestion} />
            </div>
        );
    }
}

var connectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Body);
  
export default connectedComponent;

