import { connect } from "react-redux";
import Calc from "../components/Calc";


function mapStateToProps(state) {
  return {
    param: state.param
  };
}

function mapDispatchToProps(dispatch);
{
  return {
   inputleft: dispatch({type:INPUT_LEFT})
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Calc);
