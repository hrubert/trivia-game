import { connect } from 'react-redux';
import Container from "./Container"
import { fetchData, answer, wrong } from "../actions/index";

const mapStateToProps = (state) => {
  return {
    triviaList: state.triviaList,
    currentQuestion: state.currentQuestion,
    updateTrivia: state.updateTrivia
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetch: (data) => dispatch(fetchData(data)),
    onAnswer: (num, ans, correct) => dispatch(answer(num, ans, correct)),
    onWrong: (num) => dispatch(wrong(num))
  }
}

var connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);

export default connectedComponent;