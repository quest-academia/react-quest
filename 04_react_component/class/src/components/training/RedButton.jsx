import React from 'react';
import App from '../../App';

class RedButton extends React.Component {
  render (){
    console.log(this.props);
    const test = 'test Param!';
    return(
      <button style={{ 
          width: '100px', 
          height: '30px', 
          backgroundColor: '#FA5858'
        }}
      >
        {this.props.buttonParam}
      </button>
    );
  }
}

export default RedButton;