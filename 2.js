// 2.題目：讀取7個數（1—50）的整數值，每讀取一個值，程序打印出該值個數的＊。
// （必須用迴圈完成）

// for(int i=0;i<7;i++){
//   int m=random.nextInt(50);
//   for(int j=0;j<m;j++) {
//         System.out.print("*");
//     }
//          System.out.println();
//     }



// var integer =  Math.floor(Math.random() * 51);
//   for(var j=0;j<integer;j++){
//     console.log('*');
//   }

// 可以利用google網頁中的source瀏覽每一行程式碼的偵錯(step)
var a = [ 2, 3, 7];
// console.log(a[1]);
// console.log(a.length);
var star="";
for(var i = 0; i < a.length ; i++){
  for(j = 1; j <= a[i]; j++) {
      star = star + "*";
  }
  star = star + "\n";
}

console.log(star);

// var n = 5;
// var num ="";
// for (var i = 0; i < n ;i++){
//   num = num + "*";
// }
// console.log(num);



//
//
// var samestar = Math.floor(Math.random() * 51);
//
// console.log(samestar);
//
// for(var i = 1; i <= samestar ;i++){
//   console.log('*');
// }
