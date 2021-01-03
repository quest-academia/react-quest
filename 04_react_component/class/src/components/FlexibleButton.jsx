import React from "react";

class FlexibleButton extends React.Component {
  render() {
    const style = {
      width: this.props.widthParam,
    };
    return (
      <div>
        <button style={style}>test</button>
      </div>
    );
  }
}

export default FlexibleButton;
