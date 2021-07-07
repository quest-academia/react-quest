import React from 'react';

// クラス名はファイル名と一致させる
class RedButton extends React.Component {
    render () {
        console.log(this.props)
        return (
            <button
                style={{
                    width: "100px",
                    height: "100px",
                    backgroundColor: "red"
                }}
            >  
                {this.props.buttonParam}
            </button>
        );
    }
}

export default RedButton;