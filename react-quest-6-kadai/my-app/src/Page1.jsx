import React from "react";
import Button from "./Button";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import {
  numberbutton,
  symbolbutton,
  clickClearButton,
  clickEqualButton,
} from "./module";
import { connect } from "react-redux";

class Page1 extends React.Component {
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

  handleClick(e) {
    let num = e;
    const { numberbutton } = this.props;
    numberbutton(num);
  }

  clickSymbolButton(symbol) {
    this.setState({
      symbol: symbol,
    });
    let symbol2 = symbol;
    const { symbolbutton } = this.props;
    symbolbutton(symbol2);
  }

  clickClearButton() {
    const { clickClearButton } = this.props;
    clickClearButton();
  }

  clickEqualButton() {
    const { clickEqualButton } = this.props;
    clickEqualButton();
  }

  render() {
    const { leftParam, rightParam, symbol } = this.props;
    const allButtons = [
      [
        {
          buttonParam: 7,
          value: 7,
          func: () => this.handleClick(7),
        },
        {
          buttonParam: 8,
          value: 8,
          func: () => this.handleClick(8),
        },
        {
          buttonParam: 9,
          func: () => this.handleClick(9),
        },
        {
          buttonParam: "/",
          func: () => this.clickSymbolButton("/"),
        },
        {
          buttonParam: "C",
          func: () => this.clickClearButton(),
        },
      ],
      [
        {
          buttonParam: 4,
          func: () => this.handleClick(4),
        },
        {
          buttonParam: 5,
          func: () => this.handleClick(5),
        },
        {
          buttonParam: 6,
          func: () => this.handleClick(6),
        },
        {
          buttonParam: "x",
          func: () => this.clickSymbolButton("x"),
        },
      ],
      [
        {
          buttonParam: 1,
          func: () => this.handleClick(1),
        },
        {
          buttonParam: 2,
          func: () => this.handleClick(2),
        },
        {
          buttonParam: 3,
          func: () => this.handleClick(3),
        },
        {
          buttonParam: "-",
          func: () => this.clickSymbolButton("-"),
        },
      ],
      [
        {
          buttonParam: "00",
          func: () => this.handleClick("00"),
        },
        {
          buttonParam: 0,
          func: () => this.handleClick(0),
        },
        {
          buttonParam: "=",
          func: () => this.clickEqualButton(),
        },
        {
          buttonParam: "+",
          func: () => this.clickSymbolButton("+"),
        },
      ],
    ];
    return (
      <Box textAlign="center">
        <Box mb={3} mt={3}>
          <TextField
            variant="outlined"
            value={`${leftParam} ${symbol} ${rightParam}`}
          />
        </Box>
        <Box>
          {allButtons.map((row) => (
            <div>
              {row.map((param) => (
                <Button
                  buttonParam={param.buttonParam}
                  clickFunc={param.func}
                  value={param.value}
                />
              ))}
            </div>
          ))}
        </Box>
        <Box>
          {this.props.viewdata.map((item) => (
            <p>{item.message}</p>
          ))}
        </Box>
      </Box>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state: state,
    leftParam: state[0].leftParam,
    rightParam: state[1].rightParam,
    symbol: state[2].symbol,
    viewdata: state[3].viewdata,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    numberbutton: (num) => dispatch(numberbutton(num)),
    symbolbutton: (symbol) => dispatch(symbolbutton(symbol)),
    clickClearButton: () => dispatch(clickClearButton()),
    clickEqualButton: () => dispatch(clickEqualButton()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page1);
