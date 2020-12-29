import React from 'react';

class FlexibleButton extends React.Component {
  render() {
    return (
      <button
        style={{
          width: this.props.buttonWidth,
          height: '100px',
          backgroundColor: 'red',
        }}
      >
        test
      </button>
    );
  }
}

export default FlexibleButton;
