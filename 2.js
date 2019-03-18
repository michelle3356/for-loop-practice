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


var a = [ 2, 45, 39, 8, 21, 6, 48 ];
// console.log(a[1]);
// console.log(a.length);
var arrey="";
for(var i = 0; i < a.length ; i++){
  for(j = 1; j <= a[i]; j++){
      // console.log("*");
      arrey = arrey + "*";
      console.log("*");
  }
  console.log("\n");
}


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
