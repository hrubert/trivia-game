import React, { Component } from 'react';
import HighScores from './HighScores';
import firebase from './firebase'

const firestore = firebase.firestore();
  const settings = {/* your settings... */ timestampsInSnapshots: true};
  firestore.settings(settings);

var db = firebase.firestore();

class HighScoresPage extends Component {
    constructor(props) {
        super(props);
        this.state = { scores: []} 
    }

    componentWillMount() {
       db.collection("scores").orderBy("score", "desc").limit(50)
            .get()
            .then(querySnapshot => {
                let data = []
                querySnapshot.forEach((doc) => {
                    data.push({name: doc.data().name, score: doc.data().score});
                });
                this.setState({scores: data})
            })
            // .then(results => {
            //     console.log(results)
            // }
        // this.setState({scores: scores })
        // console.log(this.state.scores)        
    }
    

    render() {
        return (
            <HighScores scores={this.state.scores}/>
            
        );
    }
}
  
export default HighScoresPage;

