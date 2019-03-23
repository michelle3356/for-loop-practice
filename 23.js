// 23.題目：一個數如果恰好等於它的因子之和，這個數就稱為「完美數(Perfect Number)」。
// 例如6=1＋2＋3.
// 28=1+2+4+7+14=28
// 496=1+2+4+8+16+31+62+124+248
// 找出1000以內的所有完美數(Perfect Number)。 （必須用迴圈完成）

// 完美數的公式為2^(n-1)次方 * 2^n次方-1
// 1.設定一個迴圈，讓變數從1-1000
// 2.找出1-1000的因數


function factor(){
  var sum = "";
  var result = "";

  for (var i = 0; i <= 100; i++) {
    for(var j = 1; j <= i/2; j++){
      if(i % j === 0){
        sum += j ;
      }
    }
    if(sum === i){
      result += i + "\n";
    }
}
return result;
}
console.log(factor());
