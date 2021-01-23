import { connect } from 'react-redux';
import Calc from '../components/calc';
import { addCalc } from '../modules/calcAction';

function mapStateToProps(state) {
    return{
        calcParams: state.calc.calcParams,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addCalcFunc: (calcParam) => dispatch(addCalc(calcParam)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Calc);