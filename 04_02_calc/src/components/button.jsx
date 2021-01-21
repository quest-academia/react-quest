import React from 'react';
import css from '../styles/layout.module.css';

class Button extends React.Component {
    render() {
        return (
            <button 
            className={css.l_button}
            onClick={this.props.clickFunc}
            >
                {this.props.buttonParam}
            </button>
        )
    }
}

export default Button;