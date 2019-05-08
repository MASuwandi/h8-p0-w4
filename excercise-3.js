
// Logic Challenge - Mencari Median

function cariMedian(arr) {
  // you can only write your code here!
  var median = 0;
  for (i = 0; i < arr.length; i++) {
    if (i == (arr.length / 2) - .5) {
      return median = arr[i];
    } else if (i == arr.length / 2) {
      return median = (arr[i-1] + arr[i]) / 2;
    }
  }
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5
