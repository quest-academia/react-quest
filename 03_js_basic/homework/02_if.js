/**
 * 問1. 変数test1の中身を自由に変更して、ifかelseに処理がいくのか検証してください
 * 正当はありません
 */
const test1 = true;
if (test1) {
    console.log('おめでとう');
} else {
    console.log('ざんねん');
}

// 問1.回答欄
// test1 = true の場合→おめでとう
// test1 = false の場合→残念


/**
 * 問2. 論理演算子を調査し、記載してください
 */

/**
 * 問2. 回答欄
 * 
 * if文と併用されることが多い演算子
 * 『&&』、『||』、『!』の3つがある。
 * 『&&』→『～かつ～だった場合』
 * 『||』→片方にtrueが入ればtrueになる(false || false →　false)
 * 『!』→　論理否定演算子(真偽値として評価したあとその値を反転する)/

/**
 * 問3. 論理演算子を使って、test3のconsoleでbase paramを表示させてください。
 * 変数baseの値を変更して回答してください
 */
// const base = 'base param';
// const test3 = base || 'base param';
// console.log(test3);

// 問3. 回答欄
// base param

/**
 * 問4. 三項演算子を調査し、記載してください
 */

/**
 * 問4. 回答欄
 * 
 * if 文の省略形または代替手段として利用
 * 三項演算子は式a、b、cに対して、a ? b : cという形を取る
 * 条件式 ? Trueの処理 : Falseの処理
 */

/**
 * 問5. 三項演算子を使って、test5のconsoleでright paramを表示させてください。
 * 変数baseの値を変更して回答してください
 */
const base = false;
const test5 = base ? 'left param' : 'right param';
console.log(test5);

// 問5. 回答欄
// right param

/**
 * 問6. if文とは何か、説明してください
 */

/**
 * 問6. 回答欄
 * 
 * 条件分岐(if文は、指定された条件が truthy ならば文を実行。
 * 条件が falsy なら、else以下の文を実行する)
 * 「もし、〜であるなら〜しなさい。それ以外であれば〜しなさい」
 * 
 */