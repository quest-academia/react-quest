import React from 'react';

class RedButton extends React.Component {
  render() {
    const test = 'testParam';
    return (
      <button style={{ 
        width: '100px',
        height: '100px',
        backgroundColor: 'red' 
      }}
      >
        {this.props.buttonParam}
      </button>
    );
  }
}

export default RedButton;
