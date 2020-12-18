/**
 * 問1. 文字列 '私の名前は〇〇です' を
 * consoleで表示してください
 * なお、文字列結合は + を使用し、
 * あなたの名前は変数yourNameに入れてください
 */

// 問1回答欄
const yourName = 'フク';
const name = '私の名前は' + yourName + 'です'
console.log(name);

// 補足
// '私の名前は' + '〇〇' + 'です'
// '文字列結合を利用して私の名前はフクですをconsoleで表示させる'

/**
 * 問2. 文字列 '私の趣味は〇〇と〇〇です' を
 * consoleで表示してください
 * なお、文字列結合はエスケープ(バッククオーテーション)を使用し、
 * あなたの趣味は変数hobby1, hobby2に入れてください
 */

// 問2回答欄
const hobby1 = 'ゴルフ';
const hobby2 = 'ダーツ';
const hobbies = `私の趣味は${hobby1}と${hobby2}です`;
console.log(hobbies);