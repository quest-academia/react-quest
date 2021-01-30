import React from 'react';

class Work01 extends React.Component {
  render() {
    return (
      <button
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: 'red',
        }}
      >
        {this.props.buttonParam}
      </button>
    );
  }
}

export default Work01;
