// 33.題目：打印出PASCAL三角形（要求打印出10行如下圖）　　（必須用迴圈完成）　
// 程序分析：
// 　　　 　　 1
//
// 　　　　　　1 　1
//
// 　　　　　　1 　2 　1
//
// 　　　　　　1　 3 　3　 1
//
// 　　　　　　1　 4　 6 　4 　1
//
// 　　　　　　1　 5　 10　10　5 　1

// if j = 0; get 1
// if j = i; get 1
// else get a[j] + a[j - 1]

function triangle2() {
  var tri = "";
  var beforeArr = [];
  var currentArr = [];
  for (var i = 0; i <= 5; i++) {
    currentArr[0] = currentArr[i] = 1;
    for (var j = 1; j < i; j++) {
      // if(j === 0 || j === i) {
      // currentArr[j] = 1;
      // } else {
      currentArr[j] = beforeArr[j] + beforeArr[j - 1]; //上一個陣列的同個位置和上一個陣列前一個位置相加
    // }
  }
  tri += currentArr.join(" ") + "\n"; //[].join(" ")會把陣列的內容變成字串
  //Ｂ＝A陣列.slice("")  利用括弧裡帶空字串可以把A陣列的內容直接塞入B，且不改變A陣列
  beforeArr = currentArr.slice();
}
return tri;
}



// m
//
// 　　　　　　m 　n
//
// 　　　　　　m 　m+n 　n
//
// 　　　　　　1　 3 　3　 1

function triangle() {

  var result = 1;

  for (var i = 1; i < 6; i++) {
    for (var j = 1; j <= i; j++) {
      result = result + '' + j;

    }
    result += "\n";
  }
  return result;

}
console.log(triangle2());
