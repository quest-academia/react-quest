import React from "react";

class DifficultButton extends React.Component {
  render() {
    return (
      <button
        style={{
          width: String(100 + this.props.difficult * 20) + "px",
          backgroundColor: "blue",
        }}
      >
        {this.props.title}
      </button>
    );
  }
}

export default DifficultButton;
