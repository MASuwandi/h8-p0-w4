// Logic Challenge - Check AB
/*
Problem
Diberikan sebuah function checkAB(str) yang menerima satu parameter berupa string. function tersebut mengembalikan nilai true jika di dalam string tersebut terdapat karakter a dan b yang memiliki jarak 3 karakter lain minimal satu kali. Jika tidak ditemukan sama sekali, kembalikan nilai false. Jarak bisa dari a ke b, atau b ke a.

Code
*/
function checkAB(str) {
  // you can only write your code here!
  var result = false;
  for (i = 0 ;i < str.length; i++) {
    if (str[i] == 'a' && str[i + 4] == 'b') {
      return true;
    } else if (str[i] == 'b' && str[i + 4] == 'a') {
      return true;
    }
  }
  return result;
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false
