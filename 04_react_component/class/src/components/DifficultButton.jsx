import React from "react";

class DifficultButton extends React.Component {
  render() {
    return (
      <button
        style={{ 
          width: `${this.props.width}`,
          height: "100px",
          backgroundColor: this.props.number % 3 === 0 ? "#f00" : "#00f",
        }}
      >
        {this.props.number % 4 === 0 ? "!!" : this.props.number}
      </button>
    );
  }
}

export default DifficultButton;
