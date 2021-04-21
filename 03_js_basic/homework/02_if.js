/**
 * 問1. 変数test1の中身を自由に変更して、ifかelseに処理がいくのか検証してください
 * 正当はありません
 */
const test1 = 10;
if (test1>10) {
console.log('とり');
} else {
console.log('いも');
}

/**
 * 問2. 論理演算子を調査し、記載してください
 */

/**
 * 問2. 回答欄
 * && || !の3つがある。
 * &&はかつ
 * ||はまたは
 * !でないという意味。
 * 「命題」や「集合」などの論理演算をするためのもの。
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
 * 条件によって処理を分けることができる演算子。
 * 
 */

/**
 * 問5. 三項演算子を使って、test5のconsoleでright paramを表示させてください。
 * 変数baseの値を変更して回答してください
 */
const base2 = 'false';

const test5 = base2 ? 'left param' : 'right param';

console.log(test5);


/**
 * 問6. if文とは何か、説明してください
 */

/**
 * 問6. 回答欄
 * 「もしも◯◯だったら〜」という分岐処理を行うために使うもの。
 * 
 * 
 */

