import React from "react";

class BigButton extends React.Component {
  render() {
    return (
      <button style={this.props.styleParam} width={this.props.widthParam}>
        {this.props.buttonParam}
      </button>
    );
  }
}
export default BigButton;
