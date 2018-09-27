import React, { Component } from 'react';
import LoginAppBar from './AppBar';
import QuestionCard from './QuestionCard';

class Container extends Component {
    componentWillMount() {
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

    UNSAFE_componentWillReceiveProps(nextProps) {
        if(nextProps.updateTrivia === true) {
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
    }

    render() {
        return (
            <div>
                <LoginAppBar />
                <QuestionCard questionNum={this.props.currentQuestion} 
                    currentQuestion={this.props.triviaList[this.props.currentQuestion]}
                    handleCorrect={this.props.onCorrect}
                    handleWrong={this.props.onWrong}
                    />
            </div>
        );
    }
}

export default Container;