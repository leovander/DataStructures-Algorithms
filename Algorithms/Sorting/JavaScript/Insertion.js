/*
    Insertion Sort
    Best Case: O(n)
    Worst Case: O(n^2)
*/
function insertionSort(A) {
    for(var i = 1; i < A.length; i++) {
        var curr = A[i];
        var j = i - 1;
        while(j > -1 && A[j] > curr) {
            A[j + 1] = A[j];
            j = j - 1;
        }

        A[j + 1] = curr;
    }

    return A;
}

console.log(insertionSort([31 ,41, 59, 26, 41, 58]));