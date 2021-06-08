import React from "react";
import MateriulButton from "@material-ui/core/Button";

class Button extends React.Component {
  render() {
    return (
      <div>
        <MateriulButton variant="contained" color="primary">
          {this.props.buttonParam}
        </MateriulButton>
      </div>
    );
  }
}

export default Button;
