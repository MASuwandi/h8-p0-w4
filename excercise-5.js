
// Logic Challenge - Ubah Huruf

function ubahHuruf(kata) {
  // you can only write your code here!
  var kamus = 'abcdefghijklmnopqrstuvwxyz',
      newWord = '';
  for (i = 0; i < kata.length; i++) {
    for (j = 0; j < kamus.length; j++) {
      if (kata[i] == kamus[j]) {
        if (kamus[j] == 'z') {
          newWord += 'a';
        } else {
          newWord += kamus[j+1];
        }
      }
    }
  }

  return newWord;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu

