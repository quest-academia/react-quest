import React from 'react';

class DifficultButton extends React.Component {
  render() {
    return (
      <button style={{
        height: '20px',
        width: this.props.width,
        backgroundColor: this.props.color
      }}>
        {this.props.text}
      </button>
    )
  }
}

export default DifficultButton;