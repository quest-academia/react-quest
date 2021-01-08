/**
 * 問1. 変数test1の中身を自由に変更して、ifかelseに処理がいくのか検証してください
 * 正当はありません
 */
const test1 = "りんご飴の名店は？";
if (test1) {
  console.log("ポムデリミナル東京");
} else {
  console.log("りんご飴の名店を調査する");
}

/**
 * 問2. 論理演算子を調査し、記載してください
 */

/**
 * 問2. 回答欄
  * 演算対象がtrueかfalseを調査する役割を持っている。演算対象が２つ以上ある場合、比較して結果を返す。
 * ex: 
 *  AND(&&)  a && b  aがfalseならbを返し、bがfalseならaを返す。両方成り立つ時だけtrueを返すので、結果的に「aかつb」はtrueが成り立つ。それ以外はfalseを返す。
 *  OR(||)   a || b  aがtrueならaを返し、aがfalseならbがtrueかfalseかを検証し、bがtrueならbを返す。結果的に「aまたはb」がtrueが成り立つ。両方ともfalseの場合のみfalseを返す。
 *  NOT(!)   !a      単一演算子がtrueならfalse,falseならtrueを返す。真偽値を入れ替える。
 * 参考：
 *  https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Logical_Operators
 */

/**
 * 問3. 論理演算子を使って、test3のconsoleでbase paramを表示させてください。
 * 変数baseの値を変更して回答してください
 */
let base = false;
const test3 = base || 'base param';
console.log(test3);

/**
 * 問4. 三項演算子を調査し、記載してください
 */

/**
 * 問4. 回答欄
 * 
 * if文を簡略化することができ、３つの値と式に置き換えることができる。
 *  ex 条件式 ? Trueの処理 : Falseの処理
 * 
 */

/**
 * 問5. 三項演算子を使って、test5のconsoleでright paramを表示させてください。
 * 変数baseの値を変更して回答してください
 */
const base2 = false;
const test5 = base2 ? 'left param' : 'right param';
console.log(test5);



/**
 * 問6. if文とは何か、説明してください
 */

/**
 * 問6. 回答欄
 * ある条件（条件式）に一致しているか調査し、処理を分岐する文。
 * 条件式に一致していればtrueとなり実行される。
 * 一致しない場合はfalseとなり、処理をelseで分岐し実行する
 * その他、else ifを用い、複数条件を分岐させることもできる。
 * 
 */

