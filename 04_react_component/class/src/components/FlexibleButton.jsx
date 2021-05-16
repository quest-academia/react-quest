import React from "react";

class FlexibleButton extends React.Component {
  render() {
    return (
      <button
        style={{ 
          width: `${this.props.width}`,
          height: "100px",
        }}
      >
        {this.props.width}
      </button>
    );
  }
}

export default FlexibleButton;
