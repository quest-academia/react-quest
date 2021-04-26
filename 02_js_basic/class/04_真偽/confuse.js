const first = true;
// 変数の前に、! が付いているとtrue, falseが逆になる
// console.log('first: ' + !first);

const second = false;
// console.log('second: ' + !second);


const third = true;
// 変数の前に、! が付いているとtrue, falseが逆になる
// さらに ! を付けることで、さらに逆になる
console.log('third: ' + !!third);

const fours= false;
console.log('fours: ' + !!fours);

console.log(!!'test');