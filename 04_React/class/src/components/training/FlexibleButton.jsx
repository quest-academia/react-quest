import React from 'react';

class FlexibleButton extends React.Component {
    render() {
        return (
            <button style={{
                width: this.props.width,
            }}
            >
            </button>
        );
    }
}

export default FlexibleButton;