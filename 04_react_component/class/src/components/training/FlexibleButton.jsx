import React from 'react';

class FlexibleButton extends React.Component {
  render() {
    return (
      <button style={{
        width: this.props.flexibleWidth
      }}>
        {this.props.text}
      </button>
    )
  }
}

export default FlexibleButton;
