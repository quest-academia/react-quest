/**
 * 変数の中の値で、
 * objectに格納されている値を取り出すことができます
 */
const sampleObj = {
  key: 'keyName',
  value: 'valueName',
};

const getKey = 'value';

// console.log(sampleObj[getKey]);

console.log(Object.values(sampleObj));
