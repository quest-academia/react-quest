import { connect } from 'react-redux';
import Counter from '../components/Counter'
import { pushPlus, pushMinus } from '../modules/counterAction'

function mapStateToProps(state) {
    return{
        num: state.counter.num
    };
}

function mapDispatchToProps(dispatch){
    return {
        pushPlusFunc: () => dispatch(pushPlus()),
        pushMinusFunc: () => dispatch(pushMinus()),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);