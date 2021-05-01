import React from "react";

class RedButton extends React.Component {
  render() {
    return (
      <button
        style={{ 
          width: "100px",
          height: "100px",
          backgroundColor: "red"
        }}
      >
        {this.props.param}
      </button>
    );
  }
}

export default RedButton;
