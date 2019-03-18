// 1.題目：求N! （如:5!=1*2*3*4*5）（必須用迴圈完成
  function layer(num){
    for(var i=num-1;i>=1;i--){
      num = num *i;
    }
    return num;
  }
  console.log(layer(5));


// 方法2
//   function calc(n){
//     if(n>0)return(calc(n-1)*n);
//     return(1);
// }
// console.log(calc(5));
