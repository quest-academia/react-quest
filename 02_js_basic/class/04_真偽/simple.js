const first = true;
// console.log(typeof first);

const second = false;
// console.log(typeof second);


/**
 * 文字列が完全に同じ
 * 完全 → 型 + 値 のどちらも一致している場合
 */
const third = 'param' === 'param'
// console.log('third: ' + third);

const four = 7 === '7';
// console.log('four: ' + four);

/**
 * 文字列のみ一致(怒られるからやっちゃだめ)
 */
const five = 7 == '7';
console.log('five: ' + five);
