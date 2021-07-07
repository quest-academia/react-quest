/**
 * 問1. 変数test1の中身を自由に変更して、ifかelseに処理がいくのか検証してください
 * 正当はありません
 */
const test1 = [];
if (test1) {
    console.log('calu');
} else {
    console.log('gon');
}

/**
 * 問2. 論理演算子を調査し、記載してください
 */

/**
 * 問2. 回答欄
 *  Booleanを返す. 3種類ある.
    ・ &&: 2つの値をチェックし、両方ともtrueの場合true, １つもしくは両方falseの場合falseを返す
    ・ ||: 2つの値をチェックし、1つもしく両方trueの場合true, ２つともfalseの場合falseを返す
    ・ ! : Booleanの値をひっくり返す
 * 
 */

/**
 * 問3. 論理演算子を使って、test3のconsoleでbase paramを表示させてください。
 * 変数baseの値を変更して回答してください
 */
const base = undefined;
const test3 = base || 'base param';
console.log(test3);

/**
 * 問4. 三項演算子を調査し、記載してください
 */

/**
 * 問4. 回答欄
 * 2つの選択肢から１つを選択するときに簡潔にかける文法
 * ?の前に条件を書き、trueの場合:の手前、falseの場合：の後の文が実行される
 * 
 */

/**
 * 問5. 三項演算子を使って、test5のconsoleでright paramを表示させてください。
 * 変数baseの値を変更して回答してください
 */
const base2 = null;
const test5 = base2 ? 'left param' : 'right param';
console.log(test5);



/**
 * 問6. if文とは何か、説明してください
 */

/**
 * 問6. 回答欄
 * 条件によって処理を分岐させる
 * if直後の()がtrueの場合、if文本体のコードを実行し、falseの場合は
 * 実行しない
 * 
 */

