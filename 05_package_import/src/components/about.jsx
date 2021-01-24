import React from 'react';

class About extends React.Component {
  componentWillMount() {
    this.props.get();
  }
  render() {
    return <h2>うんこだよ</h2>;
  }
}

export default About;
