/*
    Bubble Sort
    Best Case: O(n)
    Worst Case: O(n^2)
*/
function bubbleSort(A) {
  for(var i = 0; i < A.length; i++) {
    for(var j = 1; j < A.length - i; j++) {
      if(A[j] < A[j - 1]) {
        var temp = A[j - 1];
        A[j - 1] = A[j];
        A[j] = temp;
      }
    }
  }

  return A;
}

console.log(
    bubbleSort([1, 13, 14, 21, 24, 37, 18, 3, 4, 6, 7, 8, 10, 19, 40, 45, 71])
);