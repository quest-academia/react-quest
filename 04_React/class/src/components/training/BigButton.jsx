import React from 'react';

class BigButton extends React.Component {
    render() {
        return (
            <button style={{
                width: this.props.width,
                backgroundColor: this.props.color
            }}
            >
                {this.props.text}
            </button>
        );
    }
}

export default BigButton;