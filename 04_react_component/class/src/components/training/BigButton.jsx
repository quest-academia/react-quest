import React from 'react';

class BigButton extends React.Component {
    render (){
        console.log(this.props);

        return (
            <button 
                style= {{
                    backgroundColor: this.props.color,
                    width: this.props.width
                }}
            >
                {this.props.text}
            </button>
        );
    }
}

export default BigButton;