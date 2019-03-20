// 8.題目：有1、2、3、4個數字，能組成多少個互不相同且無重複數字的三位數？都是多少？ （必須用迴圈完成）
// 程序分析：可填在百位、十位、個位的數字都是1、2、3、4。組成所有的排列後再去掉不滿足條件的排列。


// 1.定義一個funciton，定義一個result
// 2.建立三個迴圈，代表百位、十位、個位三個位數，令迴圈的ijk都小於4，再印出結果，
// 中間要用空字串區隔，放入"\n"可增加瀏覽容易度
// 3.將得到的結果return result。
// 4.類似九九乘法表的概念


function combine(){
  var result = '';
  for(var i = 0; i <= 4; i++){
    for(var j = 0; j <= 4; j++){
      for(var k = 0; k <= 4; k++){
        result += i + '' + j + '' + k + ' ';
      }
      result += "\n";
    }
    result += "\n";
  }
  return result;
}
console.log(combine());
