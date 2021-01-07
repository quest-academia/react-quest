/**
 * 問1. 変数test1の中身を自由に変更して、ifかelseに処理がいくのか検証してください
 * 正当はありません
 */
// const test1 = true;
// const test1 = false;
// const test1 = "";
const test1 = "ブロリー田中";
// const test1 = {};
// const test1 = 23;
// const test1 = 0;

if (test1) {
  console.log(`変数test1に代入された ${test1} は  if  を通過しました。`);
  // true, "ブロリー田中, [], 23"
} else {
  console.log(`変数test1に代入された ${test1} は else を通過しました。`);
  // false, "", 0
}

/**
 * 問2. 論理演算子を調査し、記載してください
 */

/**
 * 問2. 回答欄
 * 論理演算子とは、複数の「変数または条件」から一つの真理値にしたり、真偽を逆にしたりする演算子の総称である。
 *
 * 具体的には以下の三種類がある。
 * 「論理積・かつ」を表す、'&&' は左右の両方の真理値がtrueをのときはtrueになり、それ以外はfalseになる。
 * 「論理和・または」を表す、'||' は左右のどちらか一方真理値がtrueをのときはtrueになり、両方はfalseならfalseになる。
 * また、「否定」を表す、'!'はその右の変数や条件の真偽の逆を表す。
 *
 * 論理演算子を付与された値は、Boolean型でなくともかならず、trueかfalseに変換されて働く。
 */

/**
 * 問3. 論理演算子を使って、test3のconsoleでbase paramを表示させてください。
 * 変数baseの値を変更して回答してください
 */
// const base = '';
// const test3 = base || 'base param';
// console.log(test3);

// baseがfalse(falsy)なら 'base param'が表示される

/**
 * 問4. 三項演算子を調査し、記載してください
 */

/**
 * 問4. 回答欄
 * 三項演算子とはif-else文をの略記である。
 *
 * 使い方は
 * 条件 ? 条件が真だったときの処理 : 条件が偽だったときの処理
 * 条件の部分は真理値を表す変数でもよい。
 * 真理値を表さない変数の場合は、trueかfalseに変換されて働く。
 */

/**
 * 問5. 三項演算子を使って、test5のconsoleでright paramを表示させてください。
 * 変数baseの値を変更して回答してください
 */
const base = false;
// const base = null;
// const base = undefined;
// const base = 0;
// const base = '';
const test5 = base ? "left param" : "right param";
console.log(`base が ${base} のとき test5 は ${test5}`);

/**
 * 問6. if文とは何か、説明してください
 */

/**
 * 問6. 回答欄
 * if文とは、条件が真のときだけ実行される処理である。
 * if文で指定した条件が偽でかつ、別の条件我神のときに実行される処理はelse　ifを使い、
 * どの条件にも当てはまらない場合に実行される処理をelseを使う。
 */
