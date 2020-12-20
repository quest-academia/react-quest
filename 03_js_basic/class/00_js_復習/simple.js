const testArray = [
  {
    name: "福島",
    area: "東北",
  },
  {
    name: "栃木",
    area: "東北",
  },
  {
    name: "群馬",
    area: "東北",
  },
  {
    name: "東京",
    area: "関東",
  },
];
// const gatTohoku = testArray.filter(data => data.area === '東北');
// console.log('gatTohoku');
// console.log(gatTohoku);

/**
 * filterは記載が省略されていることが非常に多い
 * ・無名関数→アロー関数
 * ・return
 * ・return が true or false
 */
// const sameGatTohoku = testArray.filter(function (data) {
//   if (data.area === '東北') {
//     return true;
//   } else {
//     return false;
//   }
// });
// console.log('sameGatTohoku');
// console.log(sameGatTohoku);

/**
 * おすすめ
 * return を省略しないとconsoleで中身を確認しやすい
 */
const withReturn = testArray.filter((data) => {
  console.log(data);
  return data.area === "東北";
});
console.log("withReturn");
console.log(withReturn);
