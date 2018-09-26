import { connect } from 'react-redux';
import Container from "./Container"
import { actionName } from "../actions/index";

const mapStateToProps = (state) => {
  return {
    default: state.default
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onActionName: (data) => dispatch(actionName(data))
  }
}

var connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);

export default connectedComponent;