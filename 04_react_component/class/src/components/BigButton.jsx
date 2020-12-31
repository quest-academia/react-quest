import React from "react";

class BigButton extends React.Component {
  render() {
    return (
      <button color={this.props.colorParam} width={this.props.widthParam}>
        {this.props.stringParam}
      </button>
    );
  }
}
