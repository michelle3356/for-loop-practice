// 3.題目： 輸入一十進位正整數，將期轉換成八進位正整數與十六進位正整數

// javascript有一語法，可將十進位轉乘其他進位，或其他進位轉其他進位。
// console.log((100).toString(8));
// console.log((100).toString(16));
// console.log((正整數).toString(欲轉換的進位數));
// 被除數/除數＝商數...餘數

function toNumber(num, quo) {
  var result = '';
  var eng = '0123456789abcdefghigklmnopqrstuvwxyz';
  // 1. num >= quo
  // 2. num % quo give string;
  // 3. num / quo ==> num

  while (num >= quo) {
    // 每一次的計算都會有餘數產生
    result = eng[num % quo] + result;
    num = Math.floor(num / quo);
  }
  return eng[num] + result;
}

// console.log(toNumber(10, 8)); // 1...2
// console.log(toNumber(65, 8)); // 10(等於一個8)...1
// console.log(toNumber(100, 8)); //1...4...4
// // console.log(100%8);


console.log(toNumber(170, 16)); // 10...10 = a...a
console.log(toNumber(256, 16)); // 1...0...0
// console.log(toNumber(100, 16)); //

// 1.num




// var i = 0;
// while (i < 3) {
//   i++;
//   console.log(i);
// }
