// 11.題目：輸入某年某月某日，判斷這一天是這一年的第幾天？ （必須用迴圈完成）
//程序分析：以3月5日為例，應該先把前兩個月的加起來，然後再加上5天即本年的第幾天，
// 特殊情況，閏年且輸入月份大於3時需考慮多加一天。

// 1.一年有12個月，總共365天，定義一個funciton(y,mon,da)分別代表年月日，
// 一月31，二月28( 閨年的二月是29天 )，三月31，四月30，五月31，六月30，
// 七月31，八月31，九月30，十月31，十一月30，十二月31
// 2.列出一到十二月判斷輸入的月日落在哪一個月份，並在判斷中累加前面月份的天數
// 2.定義一個陣列，列出所有月份的天數，定義for迴圈，將y月份之前的月份天數做相加
// 3.return到總天數以後再加上當月份的天數(z)

function ttoday(x,y,z){
  var total = 0;
  var mon = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  for(var i = 0; i <= y - 2 ; i++){
    total += mon[i];
  }
return total + z;
}

console.log(ttoday(81,11,17));

// function Tday(mon, days) {
//   var T = [mon, days];
//
//   switch (mon) {
//     case '1': //January
//     Total('days');
//     break;
//     case '2': //February
//     Total('31 + days');
//     break;
//     case '3': //March
//     Total('59 + days');
//     break;
//     case '4': //April
//     Total('90 + days');
//     break;
//     case '5': //May
//     Total('120 + days');
//     break;
//     case '6': //June
//     Total('151 + days');
//     break;
//     case '7': //July
//     Total('181 + days');
//     break;
//     case '8': //August
//     Total('212 + days');
//     break;
//     case '9': //September
//     Total('243 + days');
//     break;
//     case '10': //October
//     Total('273 + days');
//     break;
//     case '11': //November
//     Total = '304';
//     break;
//     case '12': //December
//     Total('334 + days');
//     break;
//     default:
//     break;
//   }
//
//   return T;
//
// }
