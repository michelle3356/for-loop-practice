// 31.題目：輸入10個正整數，由小到大列印出來 （需要會陣列，不會請跳過）（必須用迴圈完成）

// ans: [-7, -3, 9, 15, 18, 22, 25, 26, 27, 33, 39]

// 1.定義兩個迴圈都會從陣列的第0跑到最後
//
// S = S.sort((a,b) => a-b);


function com1(){

  var sa = [5, 4, 3];
  var result = "";
  for (var i = 0; i <= sa.length; i++) {
    for (var j = 0; j < sa.length-1-i; j++) {
      if (sa[j] > sa[j + 1]) {
        result = sa[j+1];//兩者相比取其後
        sa[j+1] = sa[j];//把得到結果的放到原本j的位置
        sa[j] = result;//把j重複取代成result去比較跟取代
      }
    }
  }

return sa;
}


console.log(com1());
