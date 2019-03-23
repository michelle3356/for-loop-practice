// 17.題目：求100之內的質數　（必須用迴圈完成）

// 1.定義兩個變數，設一個for迴圈，讓一個變數可以從1跑到100
// 2.讓兩個變數相互除並且取得餘數
// 3.當餘數等於零代表可以被整除，因此餘數不等於零的情況下為質數
// 答案：2、3、5、7、11、13、17、19、23、29、31、37、41、43、47、53、59、61、67、71、73、79、83、89、97

// 2 3 4 5 6 7 8 9 10 11 ... 97
// 1 2 3 4 5 6 7 8 ... 100
// a[2~100] = true
// a[2] => 4, 6, 8,.....100; => false
// a[3] => 6, 9, 12,... 99 => false
// a[4]
// a[5] => 10, 15, 20, ... 100 => false
// a[6]
// a[7] =>
// a[50] => 100
//先判斷全部的數為true，再各別對每個數的倍數判斷為false

function Prime() {
  var num = '';
  for (var i = 2; i <= 10000; i++) {
    for (var j = 2; j < i; j++) {
      if (i % j === 0) {
        break;
      }
    }
    if (i === j) { //j是抓到迴圈跳出的j
      num += i + ' ';
    }
  }
  num += "\n";
  return num;

}
var a = new Date().getTime(); //取得電腦中的絕對時間，並定義成a
console.log(Prime());
//將絕對時間 - 函數以前的絕對時間a，會得到執行這個函數所需要花費的時間
console.log(new Date().getTime() - a);




//sexyoung  (所花費的時間較少)
function Prime1() {
  var num = '';
  for (var i = 2; i <= 10000; i++) {
    for (var j = 2; j < i/2; j++) {
      if (i % j === 0) {
        break;
      }
    }
    if (i/2 <= j) { //j是抓到迴圈跳出的j
      num += i + ' ';
    }
  }
  num += "\n";
  return num;

}
var t = new Date().getTime();
console.log(Prime1());
console.log(new Date().getTime() - t);
