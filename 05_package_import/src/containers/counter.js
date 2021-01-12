import { connect } from 'react-redux';
import counter from '../components/counter';
import { plus, minus } from '../modules//calcAction';

function mapStateToProps(state){
  return {
    num:state.calc.num,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    plusFunc: () => dispatch(plus()),
    minusFunc: () => dispatch(minus()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(counter);
