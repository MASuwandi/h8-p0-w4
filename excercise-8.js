// Logic Challenge - Tukar Besar Kecil

function tukarBesarKecil(kalimat) {
  // you can only write your code here!
  var string = '',
      kamusA = 'abcdefghijklmnopqrstuvwxyz',
      kamusB = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  for (i = 0; i < kalimat.length; i++) {
    for (j = 0; j < kamusA.length; j++) {
      if (kalimat[i] == kamusA[j]) {
        string += kamusB[j];
        j = kamusA.length;
      } else if (kalimat[i] == kamusB[j]) {
        string += kamusA[j];
        j = kamusB.length;
      }
    }
    if (string.length != i + 1) {
      string += kalimat[i];
    }
  }
  return string;
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"
