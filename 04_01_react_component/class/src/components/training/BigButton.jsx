import React from "react";

class BigButton extends React.Component {
  render() {
    return (
      <button
        style=
        {this.props.Big}
      >
        {this.props.title}
      </button>
    );
  }
}

export default BigButton;
