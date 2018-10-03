import { connect } from 'react-redux';
import Container from "./Container"
import { fetchData, answer, nameEnter, newScores} from "../actions/index";

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
    setScores: (scoreList) => dispatch(newScores(scoreList)),    
    onFetch: (data) => dispatch(fetchData(data)),
    onAnswer: (num, ans, correct, fiftyFifty, phoneAFriend, askTheAud) => dispatch(answer(num, ans, correct, fiftyFifty, phoneAFriend, askTheAud)),
    onName: (name) => dispatch(nameEnter(name))
  }
}

var connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);

export default connectedComponent;