/*
    Merge Sort
    Best Case: O(n log n)
    Worst Case: O(n log n)
*/
function merge(A, p, q, r) {
  var n1 = q - p + 1;
  var n2 = r - q;

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

  return A;
}

function mergeSort(A, p, r) {
  var B = A;
  
  if(p < r) {
    var q = (p + r) / 2;
    B = mergeSort(B, p, q);
    B = mergeSort(B, q + 1, r);
    B = merge(B, p, q, r);
  }
  
  return B;
}

console.log(mergeSort([2, 4, 5, 7, 1, 2, 3, 6], 0, 7));