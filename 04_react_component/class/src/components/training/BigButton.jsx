import React from 'react';
import App from '../../App';

class BigButton extends React.Component {
  render (){
    return(
      <button style={{ 
          width: this.props.width, 
          height: '30px', 
          backgroundColor: this.props.color
        }}
      >
        {this.props.param}
      </button>
    );
  }
}

export default BigButton;