import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import LoginAppBar from './AppBar';
import HighScores from './HighScores'
import Homepage from './homepage'
import Body from './body'
    
class Container extends Component {
    render() {
        return (
            <div>
                <LoginAppBar />
                <Route exact path='/' component={Homepage} />
                <Route exact path='/play' component={Body} />
                <Route exact path='/highscores' component={HighScores}/>
            </div>
        );
    }
    
}

export default Container;