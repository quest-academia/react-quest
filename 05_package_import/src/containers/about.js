import { connect } from 'react-redux';
import about from '../components/about';
import { getExpress } from '../modules/expressAcrion';

function mapStateToProps(state) {
  return {
    num: state.calc.num,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    get: () => dispatch(getExpress()),
  };
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(about);
