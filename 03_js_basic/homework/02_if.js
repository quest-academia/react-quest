/**
 * 問1. 変数test1の中身を自由に変更して、ifかelseに処理がいくのか検証してください
 * 正当はありません
 */
const test1 = true;
if (test1) {
  console.log('-- if文実行 --');
} else {
  console.log('-- else文実行 --');
}

/**
 * 問2. 論理演算子を調査し、記載してください
 */

/**
 * 問2. 回答欄
 *
 * 1. 論理AND (表記: &&)
 * 2. 論理OR  (表記: ||)
 * 3. 論理NOT (表記: !)
 *
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
 *
 * 三項演算子はJavaScriptでは唯一の、3 つのオペランドをとる演算子です。
 * 条件に続いて疑問符 (?)、そして条件が真値であった場合に実行する式、コロン (:) が続き、
 * 条件がfalsyであった場合に実行する式が最後に来ます。
 * この演算子は、 if 文のショートカットとしてよく用いられます。
 *
 */

/**
 * 問5. 三項演算子を使って、test5のconsoleでright paramを表示させてください。
 * 変数baseの値を変更して回答してください
 */
const base2 = !'left param';
const test5 = base2 ? 'left param' : 'right param';
console.log(test5);



/**
 * 問6. if文とは何か、説明してください
 */

/**
 * 問6. 回答欄
 *
 * if文は、指定された条件が truthy ならばその中に書かれた処理が実行される条件判別式です。
 * 条件が falsy であった場合、その中に書かれた処理は処理は実行されません。
 * また、else if の条件を追加することも可能で、else if に指定された条件がtruthyであればその中の処理が実行されます。
 * 更に、else の条件も追加することも可能で、 if文の条件、else if の条件文にも当てはまらなかった場合、elseの中に書かれた処理が実行されます。
 *
 */

