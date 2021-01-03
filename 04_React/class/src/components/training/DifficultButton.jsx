import React from 'react';

class DifficultButton extends React.Component {
    render() {
        return (
            <button style={{
                width: this.props.width,
                backgroundColor: this.props.color || "blue"
            }}
            >
                {this.props.text}
            </button>
        );
    }
}

export default DifficultButton;