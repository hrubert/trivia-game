import React, { Component } from 'react';
import LoginAppBar from './AppBar';
import QuestionCard from './QuestionCard';

class Container extends Component {
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
                <LoginAppBar />
                <QuestionCard questionNum={this.props.currentQuestion} 
                    currentQuestion={this.props.triviaList[this.props.currentQuestion]}
                    handleAnswer={this.props.onAnswer}
                    handleWrong={this.props.onWrong}
                    />
            </div>
        );
    }
}

export default Container;