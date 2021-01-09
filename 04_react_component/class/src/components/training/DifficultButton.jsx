import React from 'react';
/*
props: width, 表示文字
ボタンを１３個、背景青
１つ表示ごとに20px増(for)利用
表示文字は１～１３まで表示、
表示文字が3の倍数の時、背景赤
表示文字が4の倍数の時表示文字'!!'
*/

class DifficultButton extends React.Component {
    render () {
        // ? letとconstの使い方はぼんやり…
        const difficultArr = [];
        let width = this.props.width;
        let text = this.props.text;

        for (text; text <= 13; text++){
            // 3の倍数の時背景を赤、それ以外の時は青を返す
            const difficultColor = (i => i % 3 === 0 ? '#ff0000' : '#0000ff');

            // 4の倍数の時!!、それ以外の時は引数を返す
            const difficultText = (i => i % 4 === 0 ? "!!" : i);

            let style = {
                display: 'block',
                backgroundColor: difficultColor(text),
                width: width + 'px'
            }

            difficultArr.push(<button style={style}>{difficultText(text)}</button>);
            width += 20;
        }

        return (
            <div>{difficultArr}</div>
        );
    }
    
}

export default DifficultButton;