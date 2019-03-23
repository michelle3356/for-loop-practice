// 27.題目：打印出如下圖案（半菱形） （必須用迴圈完成）
//
// *
//
// ***
//
// *****
//
// *******
//
// *****
//
// ***
//
// *
//
// 1.定義tri等於斷行，定義迴圈i總共7行，j代表*
// 第一行印出1個、3、5、7、5、3、1
// 當我i＝0的時候,j跑1,得到一個*, j繼續往下跑
// 程序分析：先把圖形分成兩部分來看待，前四行一個規律，後三行一個規律，
// 利用雙重for循環，第一層控制行，第二層控制列。 （必須用迴圈完成）

// -1 6 3 -3
// -3 4 2 -2
// -5 2 1 -1
// -7 0 0  0
// -5 2 1  1
// -3 4 2  2
// -1 6 3  3
//將數列找出邏輯，先都加負數，取絕對值以後再加7，再除2，並把前面三個變負數（一）
// 得到一個有順序排列的-3到3，改變題目，按照這順序設定條件再返回步驟（一）所做過的事情

//sexyoung
function special2() {
  var tri = "";
  for (var i = -3; i <= 3; i++) {
    var n = -(Math.abs(i) * 2 - 7);//abs設定絕對值
    for (var j = 0; j < n; j++) {
      tri += "*";
    }
    tri += "\n";
  }
  return tri;
}


//lui
function special() {
  var tri = "";
  for (var i = 0; i < 7; i++) { //總共七行
    // 分成前四行和後三行，在前四行設定迴圈
    if (i <= 3) {
      tri += "\n";
      for (var j = 0; j < i * 2 + 1; j++) {
        tri += '*';
      }
    } else {
      tri += "\n";
      for (var j = (7 - i) * 2 - 1; j > 0; j--) {
        tri += '*';
      }
    }
  }
  return tri;
}

console.log(special2());