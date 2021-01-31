import React from 'react';

class NumberingButton extends React.Component {
    render() {
        return (
            <button >{this.props.buttonParam}</button>
        );
    }
}

export default NumberingButton;