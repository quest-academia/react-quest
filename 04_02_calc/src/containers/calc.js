import { connect } from 'react-redux';
import Calc from '../components/calc';
import { inputCalc, inputAnswer, addCalc } from '../modules/calcAction';

function mapStateToProps(state) {
    return{
        answerParam: state.calc.answerParam,
        calcParam: state.calc.calcParam,
        calcParams: state.calc.calcParams,
        answerParams: state.calc.answerParams,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        inputAnswerFunc: () => dispatch(inputAnswer()),
        addCalcFunc: (calcParam, result) => dispatch(addCalc(calcParam, result)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Calc);