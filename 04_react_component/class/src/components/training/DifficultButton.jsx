import React from 'react';
import App from '../../App';

class DifficultButton extends React.Component {
  render (){
    if(this.props.param % 3 === 0) {
      return(
        <button style={{ 
            width: this.props.width, 
            height: '30px', 
            backgroundColor: '#FA5858'
          }}
        >
          { this.props.param }
        </button>
      );
    } else if (this.props.param % 4 === 0){
      return(
        <button style={{ 
            width: this.props.width, 
            height: '30px', 
            backgroundColor: '#40FF00'
          }}
        >
          !!
        </button>
      );
    } else {
    return(
      <button style={{ 
          width: this.props.width, 
          height: '30px', 
          backgroundColor: '#40FF00'
        }}
      >
        { this.props.param }
      </button>
      );
    }
  }
}

export default DifficultButton;