import React from "react";
import Button from "./button";
import css from "../styles/layout.module.css";

class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leftParam: "",
      rightParam: "",
      symbol: "",
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
  }

  clickSymbolButton(symbol) {
    this.setState({
      symbol: symbol,
    });
  }

  render() {
    const { leftParam, rightParam, symbol } = this.state;
    return (
      <div className={css.l_calc}>
        <div>
          <input type="text" value={`${leftParam} ${symbol} ${rightParam}`} />
        </div>
        <div>
          <div>
            <Button
              buttonParam={7}
              clickFunc={() => this.clickNumberButton(7)}
            />
            <Button
              buttonParam={8}
              clickFunc={() => this.clickNumberButton(8)}
            />
            <Button
              buttonParam={9}
              clickFunc={() => this.clickNumberButton(9)}
            />
            <Button
              buttonParam={"/"}
              clickFunc={() => this.clickSymbolButton("/")}
            />
          </div>
          <div>
            <Button
              buttonParam={4}
              clickFunc={() => this.clickNumberButton(4)}
            />
            <Button
              buttonParam={5}
              clickFunc={() => this.clickNumberButton(5)}
            />
            <Button
              buttonParam={6}
              clickFunc={() => this.clickNumberButton(6)}
            />
            <Button
              buttonParam={"x"}
              clickFunc={() => this.clickSymbolButton("x")}
            />
          </div>
          <div>
            <Button
              buttonParam={1}
              clickFunc={() => this.clickNumberButton(1)}
            />
            <Button
              buttonParam={2}
              clickFunc={() => this.clickNumberButton(2)}
            />
            <Button
              buttonParam={3}
              clickFunc={() => this.clickNumberButton(3)}
            />
            <Button
              buttonParam={"-"}
              clickFunc={() => this.clickSymbolButton("-")}
            />
          </div>
          <div>
            <Button
              buttonParam={"00"}
              clickFunc={() => this.clickNumberButton("00")}
            />
            <Button
              buttonParam={0}
              clickFunc={() => this.clickNumberButton(0)}
            />
            <Button buttonParam={"="} />
            <Button
              buttonParam={"+"}
              clickFunc={() => this.clickSymbolButton("+")}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Calc;
