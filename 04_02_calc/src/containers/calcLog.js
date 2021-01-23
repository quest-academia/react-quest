import { connect } from 'react-redux';
import CalcLog from '../components/calcLog';

function mapStateToProps(state) {
    return{
        calcParams: state.calc.calcParams,
    };
}

export default connect(mapStateToProps)(CalcLog);