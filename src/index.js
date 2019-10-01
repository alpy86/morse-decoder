

var morse_table = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    morse_table['*****'] = ' ';
    var arrFromMorse = Object.entries(morse_table);
    var newarr = [];
    var morzeArr = [];
    var newMorzeArr = [];
    var arr = Array.from(expr);
for (var i = 0; i < arr.length; i+=2) {
  if (arr[i] == 1 && arr[i+1] == 1) {
    newarr.push("-");
  }
  if (arr[i] == 1 && arr[i+1] == 0) {
    newarr.push(".");
  } 
  if (arr[i] == 0 && arr[i+1] == 0) {
    newarr.push("0");
  }
  if (arr[i] == '*' && arr[i+1] == '*') {
    newarr.push("*");
  }
}
for (var i = 0; i < newarr.length; i+=5) {
    morzeArr.push(newarr.slice(i, i + 5));
}
for (var i = 0; i < morzeArr.length; i++) {
    for (var j = 0; j < morzeArr[i].length; j++) {
      if (morzeArr[i][j] == "0") {
        morzeArr[i].splice(j, 1);
        j = j - 1;
      }
    }
}
for (var i = 0; i < morzeArr.length; i++) {
    newMorzeArr.push(morzeArr[i].join(""));
}
var message = [];
for (var i = 0; i < newMorzeArr.length; i++) {
    for (var j = 0; j < arrFromMorse.length; j++) {
      if (newMorzeArr[i] == arrFromMorse[j][0]) {
        message.push(arrFromMorse[j][1]);
      }
    }
}
var totalMessage = message.join('');
 return totalMessage;
}

module.exports = {
    decode
}
