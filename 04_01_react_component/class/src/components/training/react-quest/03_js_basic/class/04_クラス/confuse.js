class Shiota {
  constructor(prop) {
    // console.log('---- in constructor')
    this.age = 25;
    this.name = 'yoshiaki';
    this.arg = prop;
  }

  test = this.age + ' is around thirteen';
}

const argParam = 'this is arg';
/**
 * 引数を含めることができ、constructorで受け取ることができる
 */
const shiotaInfo = new Shiota(argParam);
// console.log('with arg in constructor');
// console.log(shiotaInfo.arg);

/**
 * Classの中からはconstructor内の値は取得できない
 * (Reactでは行うことができる)
 */
// console.log(shiotaInfo.age);
// console.log(shiotaInfo.test)
