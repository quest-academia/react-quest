import React from 'react';

class BigButton extends React.Component {
  render() {
    return (
      <button
        style={{
          width: this.props.buttonWidth,
          height: '100px',
          backgroundColor: this.props.buttonColor,
        }}
      >
        {this.props.buttonParam}
      </button>
    );
  }
}

export default BigButton;
