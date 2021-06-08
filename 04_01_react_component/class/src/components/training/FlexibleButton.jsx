import React from "react";

class FlexibleButton extends React.Component {
  render() {
    return (
      <button
        style={{
          width: String(100 + this.props.flexible * 20) + "px",
        }}
      >
        Flexible
      </button>
    );
  }
}

{
  /* <button style = {{width: '100px'}}>a</button>
<button style = {{width: '120px'}}>b</button>
<button style = {{width: '140px'}}>c</button>
<button style = {{width: '160px'}}>d</button>
<button style = {{width: '180px'}}>e</button>*/
}

export default FlexibleButton;
