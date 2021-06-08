// function testFunc() {
//   console.log('in function');
// }

// console.log('------- before function');
// testFunc();
// console.log('------- after function');

/**
 * testParamを受け取り、中身がargに移し替えられている
 */
function testFunc2(arg) {
  console.log('---- arg');
  console.log(arg);
}

const testParam = 'this is test';
console.log('------testParam');
console.log(testParam);

testFunc2(testParam);
