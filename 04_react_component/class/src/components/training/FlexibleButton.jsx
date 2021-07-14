import React from 'react';
import App from '../../App';

class FlexibleButton extends React.Component {
  render (){
    return(
      <button style={{ 
          width: this.props.width, 
          height: '30px', 
          backgroundColor: '#FA5858'
        }}
      >
        flexbutton
      </button>
    );
  }
}

export default FlexibleButton;