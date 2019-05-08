
// Logic Challenge - Mencari Modus

function cariModus(arr) {
  // you can only write your code here!
  var arrModus = [],
      arrCounter = [],
      modus = 0,
      counter = 0;
  arrModus.push(arr[0]);
  arrCounter.push(0);
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j <= arrModus.length; j++) {
      if (arrModus[j] == arr[i]) {
        arrCounter[j]++;
        break;
      } else if (arrModus[j] == undefined) {
        arrModus.push(arr[i]);
        arrCounter.push(1);
        break;
      }
    }
  }
  if (arrModus.length < 2) {
    return -1;
  }
  for (k = 0; k < arrCounter.length; k++) {
    if (counter < arrCounter[k]) {
      counter = arrCounter[k];
      modus = arrModus[k];
    }
  }
  if (counter < 2) {
    return -1;
  }
  return modus;
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
