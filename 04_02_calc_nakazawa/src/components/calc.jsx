import React from 'react';
import Button from './button';
import CSS from '../styles/layout.module.css';

class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leftParam: '',
      rightParam: '',
      symbol: '',
      bool: false,
    };
  }

  clickNumberButton(num) {
    if (!!this.state.symbol) {
      this.setState({
        rightParam: this.state.rightParam + String(num),
      });
    } else {
      this.setState({
        leftParam: this.state.leftParam + String(num),
      });
    }
    if (this.state.bool && !this.state.symbol) {
      console.log('here');
      this.setState({
        leftParam: num,
        bool: false,
      });
    }
  }

  clickSymbolButton(symbol) {
    if (!!this.state.leftParam && !this.state.rightParam) {
      this.setState({
        symbol: symbol,
      });
    }
  }

  clickEqualButton() {
    const { leftParam, rightParam, symbol, bool } = this.state;
    const leftNum = Number(leftParam);
    const rightNum = Number(rightParam);
    let result = 0;

    if (!!this.state.rightParam) {
      if (symbol === '÷') {
        result = leftNum / rightNum;
      } else if (symbol === 'x') {
        result = leftNum * rightNum;
      } else if (symbol === '+') {
        result = leftNum + rightNum;
      } else {
        result = leftNum - rightNum;
      }
      this.setState({
        leftParam: result,
        rightParam: '',
        symbol: '',
        bool: true,
      });
    }
  }

  clickClearButton() {
    this.setState({
      leftParam: '',
      rightParam: '',
      symbol: '',
      bool: false,
    });
  }

  render() {
    const { leftParam, rightParam, symbol } = this.state;
    return (
      <div className={CSS.l_calc}>
        <input
          className={CSS.l_input}
          type='text'
          value={`${leftParam} ${symbol} ${rightParam}`}
        />
        <div className={CSS.l_grid_box}>
          <Button
            buttonParam={'÷'}
            clickFunc={() => this.clickSymbolButton('÷')}
          />
          <Button
            buttonParam={'x'}
            clickFunc={() => this.clickSymbolButton('x')}
          />
          <Button
            buttonParam={'-'}
            clickFunc={() => this.clickSymbolButton('-')}
          />
          <Button
            buttonParam={'+'}
            clickFunc={() => this.clickSymbolButton('+')}
          />
          <Button buttonParam={7} clickFunc={() => this.clickNumberButton(7)} />
          <Button buttonParam={8} clickFunc={() => this.clickNumberButton(8)} />
          <Button buttonParam={9} clickFunc={() => this.clickNumberButton(9)} />
          <Button buttonParam={4} clickFunc={() => this.clickNumberButton(4)} />
          <Button buttonParam={5} clickFunc={() => this.clickNumberButton(5)} />
          <Button buttonParam={6} clickFunc={() => this.clickNumberButton(6)} />
          <Button buttonParam={1} clickFunc={() => this.clickNumberButton(1)} />
          <Button buttonParam={2} clickFunc={() => this.clickNumberButton(2)} />
          <Button buttonParam={3} clickFunc={() => this.clickNumberButton(3)} />
          <Button buttonParam={0} clickFunc={() => this.clickNumberButton(0)} />
          <Button
            buttonParam={'00'}
            clickFunc={() => this.clickNumberButton('00')}
          />
          <Button
            buttonParam={'.'}
            clickFunc={() => this.clickNumberButton('.')}
          />
          <Button buttonParam={'C'} clickFunc={() => this.clickClearButton()} />
          <Button buttonParam={'='} clickFunc={() => this.clickEqualButton()} />
        </div>
      </div>
    );
  }
}

export default Calc;
