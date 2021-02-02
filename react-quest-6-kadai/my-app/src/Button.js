import React from "react";
import { CustomButton } from "./styles/buttonstye";

class Button extends React.Component {
  render() {
    return (
      <CustomButton value={this.props.value} onClick={this.props.clickFunc}>
        {this.props.buttonParam}
      </CustomButton>
    );
  }
}

export default Button;
