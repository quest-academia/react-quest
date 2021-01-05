import React from 'react';

class Button extends React.Component {
  render() {
    return (
    <button>{this.props.buttonParam}</button>
    );
  }
}

export default Button;
