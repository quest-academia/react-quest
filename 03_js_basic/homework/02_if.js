/**
 * 問1. 変数test1の中身を自由に変更して、ifかelseに処理がいくのか検証してください
 * 正当はありません
 */
const test1 = false;
if (test1) {
    console.log(test1)
} else {
    console.log(test1)
}

/**
 * 問2. 論理演算子を調査し、記載してください
 */

/**
 * 問2. 回答欄
 * 論理演算子はAND(&&), OR(||)を用いて真偽値を計算します。
 * 1以上、10未満などの少し複雑な条件式を書くことができます。
 * if(value >= 1 && value < 10){...};
 */

/**
 * 問3. 論理演算子を使って、test3のconsoleでbase paramを表示させてください。
 * 変数baseの値を変更して回答してください
 */
let base = '';
const test3 = base || 'base param';
console.log(test3);

/**
 * 問4. 三項演算子を調査し、記載してください
 */

/**
 * 問4. 回答欄
 * if文を1行で記述できる文法です。
 * ?と:で記述します。
 * const isEven = num % 2 === 0 ? true : false;
 * 
 * 簡潔な処理であれば、三項演算子でもいいですが、
 * 複雑な条件分岐を書こうとすると可読性が一気に下がるのであまり多用しない方が良いです。
 */

/**
 * 問5. 三項演算子を使って、test5のconsoleでright paramを表示させてください。
 * 変数baseの値を変更して回答してください
 */
base = '';
const test5 = base ? 'left param' : 'right param';
console.log(test5);

/**
 * 問6. if文とは何か、説明してください
 */

/**
 * 問6. 回答欄
 * 条件分岐を書くときにつかう構文です
 * if, else, else ifを使って場合わけをし、
 * 期待する結果を求めて開発を進めます。
 * プログラミングの基本の1つです。
 */
