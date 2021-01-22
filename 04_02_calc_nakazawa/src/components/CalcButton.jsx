import React from 'react';
// import CSS from '../styles/layout.module.css';
import { Button } from '@material-ui/core';

class CalcButton extends React.Component {
  render() {
    return (
      <Button color={this.props.color} onClick={this.props.clickFunc}>
        {this.props.buttonParam}
      </Button>
    );
  }
}

export default CalcButton;
