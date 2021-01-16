import React from 'react';
import CSS from '../styles/layout.module.css';

class Button extends React.Component {
  render() {
    return (
      <button class={CSS.l_button} onClick={this.props.clickFunc}>
        {this.props.buttonParam}
      </button>
    );
  }
}

export default Button;
