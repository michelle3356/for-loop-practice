

function ninenine() {
  var result = '';
  for(var i = 1;i <= 9;i++){
    for(var j = 1;j <= 9;j++){
      result += i + '*' + j + '=' + i * j + ' ';
    }
    result += "\n"
  }
  return result;
}

console.log(ninenine());

/*
  1*1=1 1*2=2 .... 1*9=9
  2*1=2 2*2=4 .... 2*9=18
  ...
  9*1=9 9*2=18 ... 9*9=81
 */
