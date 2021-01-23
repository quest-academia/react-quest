<<<<<<< HEAD
import React from 'react';
import ButtonElm from './button';
import css from '../styles/layout.module.css';
import TextField from '@material-ui/core/TextField';
=======
import React from "react";
import Button from "./button";
import css from "../styles/layout.module.css";
>>>>>>> develop

class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leftParam: "",
      rightParam: "",
      symbol: "",
<<<<<<< HEAD
    }
  }
  clickNumberButton(num) {
    if(!!this.state.symbol) {
=======
    };
  }

  clickNumberButton(num) {
    if (!!this.state.symbol) {
>>>>>>> develop
      this.setState({
        rightParam: this.state.rightParam + String(num),
      });
    } else {
      this.setState({
        leftParam: this.state.leftParam + String(num),
      });
    }
  }
<<<<<<< HEAD
=======

>>>>>>> develop
  clickSymbolButton(symbol) {
    this.setState({
      symbol: symbol,
    });
  }
<<<<<<< HEAD
  clickEqualButton () {
    const { leftParam, rightParam, symbol }= this.state;
    const leftNum = Number(leftParam);
    const rightNum = Number(rightParam);
    let result = 0;
    if(symbol === '/') {
      result = leftNum / rightNum;
    } else if (symbol === '×')　{
      result = leftNum * rightNum;
    } else if (symbol === '-')　{
=======

  clickEqualButton() {
    const { leftParam, rightParam, symbol } = this.state;
    const leftNum = Number(leftParam);
    const rightNum = Number(rightParam);
    let result = 0;
    if (symbol === "/") {
      result = leftNum / rightNum;
    } else if (symbol === "x") {
      result = leftNum * rightNum;
    } else if (symbol === "-") {
>>>>>>> develop
      result = leftNum - rightNum;
    } else {
      result = leftNum + rightNum;
    }
<<<<<<< HEAD
    const calcParam = `${leftParam} ${symbol} ${rightParam} = ${result}`
    this.props.addCalcFunc(calcParam)
    this.setState({
      leftParam: result,
      rightParam: '',
      symbol: '',
    })
  }
  clickClearButton () {
    this.setState({
      leftParam: '',
      rightParam: '',
      symbol: '',
    })
  }
  render() {
    const { leftParam, rightParam, symbol }= this.state;
    const allButtons = [
      [    
        {
          buttonParam:7,
          func:() => this.clickNumberButton(7),
        },
        {
          buttonParam:8,
          func:() => this.clickNumberButton(8),
        },
        {
          buttonParam:9,
          func:() => this.clickNumberButton(9),
        },
        {
          buttonParam:'/',
          func:() => this.clickSymbolButton('/'),
        },
        {
          buttonParam:'C',
          func:() => this.clickClearButton(),
        },
        ],
        [
=======
    this.setState({
      leftParam: result,
      rightParam: "",
      symbol: "",
    });
  }

  clickClearButton() {
    this.setState({
      leftParam: "",
      rightParam: "",
      symbol: "",
    });
  }

  render() {
    const { leftParam, rightParam, symbol } = this.state;
    const allButtons = [
      [
        {
          buttonParam: 7,
          func: () => this.clickNumberButton(7),
        },
        {
          buttonParam: 8,
          func: () => this.clickNumberButton(8),
        },
        {
          buttonParam: 9,
          func: () => this.clickNumberButton(9),
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
>>>>>>> develop
        {
          buttonParam: 4,
          func: () => this.clickNumberButton(4),
        },
        {
<<<<<<< HEAD
          buttonParam:5,
          func:() => this.clickNumberButton(5),
        },
        {
          buttonParam:6,
          func:() => this.clickNumberButton(6),
        },
        {
          buttonParam:'×',
          func:() => this.clickSymbolButton('×'),
=======
          buttonParam: 5,
          func: () => this.clickNumberButton(5),
        },
        {
          buttonParam: 6,
          func: () => this.clickNumberButton(6),
        },
        {
          buttonParam: "x",
          func: () => this.clickSymbolButton("x"),
>>>>>>> develop
        },
      ],
      [
        {
<<<<<<< HEAD
          buttonParam:1,
          func:() => this.clickNumberButton(1),
        },
        {
          buttonParam:2,
          func:() => this.clickNumberButton(2),
        },
        {
          buttonParam:3,
          func:() => this.clickNumberButton(3),
        },
        {
          buttonParam:'-',
          func:() => this.clickSymbolButton('-'),
=======
          buttonParam: 1,
          func: () => this.clickNumberButton(1),
        },
        {
          buttonParam: 2,
          func: () => this.clickNumberButton(2),
        },
        {
          buttonParam: 3,
          func: () => this.clickNumberButton(3),
        },
        {
          buttonParam: "-",
          func: () => this.clickSymbolButton("-"),
>>>>>>> develop
        },
      ],
      [
        {
<<<<<<< HEAD
          buttonParam:'00',
          func:() => this.clickNumberButton('00'),
        },
        {
          buttonParam:0,
          func:() => this.clickNumberButton(0),
        },
        {
          buttonParam:'=',
          func:() => this.clickEqualButton(),
        },
        {
          buttonParam:'+',
          func:() => this.clickSymbolButton('+'),
        },
      ]
    ]
    return(
    <div className={css.l_calc} >
      <div>
        <TextField variant="outlined" value={`${leftParam} ${symbol} ${rightParam}`} />
      </div>
      <div>
        {allButtons.map((row) => (
          <div>
            {row.map((param) => (
              <ButtonElm
              buttonParam={param.buttonParam}
              clickFunc={param.func}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
    )
  }
}
export default Calc;
=======
          buttonParam: "00",
          func: () => this.clickNumberButton("00"),
        },
        {
          buttonParam: 0,
          func: () => this.clickNumberButton(0),
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
      <div className={css.l_calc}>
        <div>
          <input
            type="text"
            value={`${leftParam} ${symbol} ${rightParam}`} 
          />
        </div>
        <div>
          {allButtons.map((row) => (
            <div>
              {row.map((param) => (
                <Button
                  buttonParam={param.buttonParam}
                  clickFunc={param.func}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Calc;
>>>>>>> develop
