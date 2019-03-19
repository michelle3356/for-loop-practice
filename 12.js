// 12.題目：輸入三個整數x,y,z，請把這三個數由小到大輸出。


// 1.將數字指入一個陣列
// 2.將陣列做升冪排列



function toAsc(x, y, z) {
  var A = [x, y, z];
  // console.log(A.length);

  A.sort((a,b) => a - b);
  return A;
}

console.log(toAsc(5, 3, 4)); // [3, 4, 5]
