// 給一個不多於5位的正整數，要求：一、求它是幾位數，二、逆序打印出各位數字。 （必須用迴圈完成）

// 1.判斷數字有沒有大於10
// 2.將數字整除10，再丟給num
// 3.計算除的次數，給到一個變數中
// 4. freq + 1 return back.

// Lui
function getLength(num) {
  var freq = 0;
  while (num > 10) {
    num = num / 10;
    freq++;
  }
  return freq + 1;
}
//
// // sexyoung
// function getLength2(num) {
//   var freq = 0;
//   do {
//     freq++;
//     num = Math.floor(num / 10);
//   } while(num > 0);
//   return freq;
// }
//
// console.log(getLength2(12));


// 1.將數字轉成字串
// 2.命名字串的長度
// 3.設定一個迴圈可以印出從字串最後一個到第零個的資料
// 4.將得到的結果return back.

function reverse(num) {
  num = num.toString();
  var result = '';
  for(var i = num.length - 1; i >= 0; i--){
    result += num[i];
  }
  return result;
}

//
function reverse2(num) {
  num = num.toString();
  var result = '';
  for (var i = 0; i < num.length; i++) {
    result = num[i] + result;
  }
  return result;
}

console.log(reverse2(123));// 會呼叫一個function，會到function中執行運算，最後得到一個結果return回來。
