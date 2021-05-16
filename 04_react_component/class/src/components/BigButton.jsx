import React from "react";

class BigButton extends React.Component {
  render() {
    return (
      <button
        style={{ 
          width: `${this.props.width}`,
          height: "100px",
          backgroundColor: `${this.props.backgroundColor}`,
        }}
      >
        {this.props.text}
      </button>
    );
  }
}

export default BigButton;
