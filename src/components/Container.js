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
    render() {
        console.log(this.props.triviaList instanceof Array)
        return (
            <div>
                <LoginAppBar />
                <QuestionCard triviaList={this.props.triviaList}/>
            </div>
        );
    }
}

export default Container;