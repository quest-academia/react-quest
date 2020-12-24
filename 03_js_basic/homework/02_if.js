/**
 * 問1. 変数test1の中身を自由に変更して、ifかelseに処理がいくのか検証してください
 * 正当はありません
 */
const test1 = '10';
if (test1 === 10) {
  console.log('ピンポーン');
} else {
  console.log('ブッブー');
}

/**
 * 問2. 論理演算子を調査し、記載してください
 */

/**
 * 問2. 回答欄
 *論理演算を表現する記号や符号のこと。真（true）と偽（false）の二値からなる真偽値
 （真理値/ブール値）に対して演算を行うこと。
 JSなら主に論理積AND(&&)や論理和 OR (||)や論理否定NOT (!)を主に用いる
　優先順位が決まっている（ほとんどの場合NOT→AND→ORの順）で実行される
 * パターンが多い
 　ちなみに論理演算はほかにも排他的論理和（XOR），否定論理責(NAND)，否定論理和(NOR)などがある。
 */

/**
 * 問3. 論理演算子を使って、test3のconsoleでbase paramを表示させてください。
 * 変数baseの値を変更して回答してください
 */
const base = 'base param';
const test3 = base || 'base param';
console.log(test3);

/**
 * 問4. 三項演算子を調査し、記載してください
 */

/**
 * 問4. 回答欄
 *if文の省略形または代替手段として利用することが可能で、
 3つの値・式を必要とする特殊な演算子
 *
 */

/**
 * 問5. 三項演算子を使って、test5のconsoleでright paramを表示させてください。
 * 変数baseの値を変更して回答してください
 */
const aho = undefined;
const test5 = aho ? 'left param' : 'right param';
console.log(test5);

/**
 * 問6. if文とは何か、説明してください
 */

/**
 * 問6. 回答欄
 *
 *
 *
 */
