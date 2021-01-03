import React from "react";

class DifficultButton extends React.Component {
  render() {
    const style = {
      width: this.props.widthParam,
      backgroundColor: this.props.backgroundColorParam,
    };
    return (
      <div>
        <button style={style}>{this.props.letterParam}</button>
      </div>
    );
  }
}

export default DifficultButton;
