import React from "react";

class FlexibleButton extends React.Component {
  render() {
    console.log(this.props);


    return (
      <button
        style={{ 
          width: this.props.flexibleWidth,
          height: "100px",
          backgroundColor: "blue"
        }}
      >
        {this.props.param}
      </button>
    );
  }
}

export default FlexibleButton;
/**
 * 1 
 */