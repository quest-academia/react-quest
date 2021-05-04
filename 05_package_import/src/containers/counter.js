// counter.jsxのViewとcalcReducer.jsのModelを繋ぐControllerの役割
import { connect } from "react-redux";
import counter from "../components/counter";
import { plus, minus } from "../modules/calcAction";

// propsによってReduxの値を取得できるようにする関数
function mapStateToProps(state) {
  return {
    // rootReducer.jsのexport defaultのオブジェクトがstateになっている。
    num: state.calc.num,
  };
}

// propsによってReduxの関数を発火できるようにする関数
function mapDispatchToProps(dispatch) {
  return {
    plusFunc: () => dispatch(plus()),
    minusFunc: () => dispatch(minus())
    // 使い方
    // Viewのボタンで発火させる変数名: () => dispatch(Reduxの関数を発火させる関数)
  };
}

// react-redux（reactとreduxをつなげるパッケージ）のconnectの使い方
// 第一引数はredux(Model)側のデータをreact（View）側にpropsで渡す関数名
// 第二引数はredux(Model)側の関数をreact（View）側にpropsで渡す関数名
// connect()(ここに当たる部分はpropsを使えるようにするコンポーネント)
export default connect(mapStateToProps, mapDispatchToProps)(counter);
