import React from "react";

class RedButton extends React.Component {
  render() {
    console.log(this.props);


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
