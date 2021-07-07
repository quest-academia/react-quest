import React from 'react';
/* 
widthをpropsで管理
１つごとに横幅が20px増えるボタンを５つ作成
forを利用
*/
class FlexibleButton extends React.Component {
    render () {
        const flexibleArr = [];
        let width = this.props.width;
        
        for (let i = 0; i < 5; i++){
            const style = {
                    display: 'block',
                    width: width + 'px'
                };
            flexibleArr.push(<button style={style}>{this.props.text}</button>);
            width += 20;
        }

        return (
            // ! divをつけないと反応しない
            <div>{flexibleArr}</div>
        );
    }
}

export default FlexibleButton;
