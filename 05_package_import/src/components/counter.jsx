import React from 'react';

class Counter extends React.Component {
  render() {
    return (
      <div>
        <div>{this.props.num}</div>
        <div>
          <button onClick={this.props.plusFunc}>+</button>
          <button onClick={this.props.minusFunc}>-</button>
        </div>
      </div>
    );
  }
}
export default Counter;
