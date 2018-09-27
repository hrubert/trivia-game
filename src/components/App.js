import { connect } from 'react-redux';
import Container from "./Container"
import { fetchData } from "../actions/index";

const mapStateToProps = (state) => {
  return {
    triviaList: state.triviaList,
    currentQuestion: state.currentQuestion
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetch: (data) => dispatch(fetchData(data))
  }
}

var connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);

export default connectedComponent;