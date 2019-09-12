/*
    Merge Sort
    Best Case: O(n log n)
    Worst Case: O(n log n)
*/
function merge(A, p, q, r) {
  var n1 = q - p + 1; //3
  var n2 = r - q; // 3

  var L = [];
  var R = [];

  for(var i = 0; i < n1; i++) {
    L.push(A[p + i]);
  }

  for(var i = 0; i < n2; i++) {
    R.push(A[q + i + 1]);
  }

  var i = 0;
  var j = 0;
  var k = p;

  while(i < n1 && j < n2) {
    if(L[i] <= R[j]) {
      A[k] = L[i];
      i++;
    } else {
      A[k] = R[j];
      j++;
    }

    k++;
  }

  while(i < n1) {
    A[k] = L[i];
    i++;
    k++;
  }

  while(j < n2) {
    A[k] = R[j];
    j++;
    k++;
  }

  console.log(A);
}

function mergeSort(A, p, r) {
  if(p < r) {
    var q = (p + r) / 2;
    mergeSort(A, p, q);
    mergeSort(A, q + 1, r);
    merge(A, p, q, r);
  }
}

console.log(mergeSort([2, 4, 5, 7, 1, 2, 3, 6], 0, 7));