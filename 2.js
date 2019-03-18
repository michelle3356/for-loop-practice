// 2.題目：讀取7個數（1—50）的整數值，每讀取一個值，程序打印出該值個數的＊。
// （必須用迴圈完成）

// for(int i=0;i<7;i++){
//   int m=random.nextInt(50);
//   for(int j=0;j<m;j++) {
//         System.out.print("*");
//     }
//          System.out.println();
//     }

var samestar = Math.floor(Math.random() * 51);

console.log(samestar);

for(var i = 1; i <= samestar ;i++){
  console.log('*');
}
