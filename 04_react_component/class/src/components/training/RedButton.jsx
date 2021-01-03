import React from "react";

class XXXXXX extends React.Component {
  render() {
    // const test = "test Param";
    // console.log(this.props);
    return (
      <button
        style={{ width: "100px", height: "100px", backgroundColor: "red" }}
      >
        {this.props.buttonParam}
      </button>
    );
  }
}

export default XXXXXX;
