import React from 'react';
import css from '../styles/layout.module.css';
import Button from '@material-ui/core/Button';

class ButtonElm extends React.Component {
  render() {
    return (
      <Button
      variant="contained"
      className={css.l_button}
      onClick={this.props.clickFunc}
      >
        {this.props.buttonParam}
      </Button>
    )
  }
}

export default ButtonElm;