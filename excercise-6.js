// Logic Challenge - Digit Perkalian Minimum

function digitPerkalianMinimum(angka) {
  // you can only write your code here!
  var dgitMin = ['', ''];
  dgitMin[0] = '1';
  dgitMin[1] = String(angka);
  for (i = angka; i > 0; i--) {
    if (angka % i == 0) {
      if (angka / i < i) {
        dgitMin[0] = String(angka / i);
        dgitMin[1] = String(i);
      }
    }
  }
  return dgitMin[0].length + dgitMin[1].length;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2
