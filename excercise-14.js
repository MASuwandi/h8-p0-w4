// Logic Challenge - Naik Angkot

function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  //your code here
  var arrObj = [];
  for (i = 0; i < arrPenumpang.length; i++) {
  var counter = 0;
    arrObj.push({ penumpang: arrPenumpang[i][0], naikDari: arrPenumpang[i][1], tujuan: arrPenumpang[i][2], bayar: 0 });
    for (j = 0; j < rute.length; j++) {
      if (arrPenumpang[i][1] == rute[j]) {
        counter += j + 1;
      } else if (arrPenumpang[i][2] == rute[j]) {
        counter -= j + 1;
      }
    }
    arrObj[i].bayar = counter * -2000;
  }
  return arrObj;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]
