import { connect } from 'react-redux';
import CalcLog from '../components/calcLog';

function mapStateToProps(state) {
    return{
        calcParams: state.calc.calcParams,
        answerParams: state.calc.answerParams,
    };
}



export default connect(mapStateToProps)(CalcLog);