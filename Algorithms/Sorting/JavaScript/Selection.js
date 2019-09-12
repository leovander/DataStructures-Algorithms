/*
    Selection Sort
    Best Case: O(n^2)
    Worst Case: O(n^2)
*/
function selectionSort(A) {
    for(var i = 0; i < A.length - 1; i++) {
        var low = i;

        for(var j = i + 1; j < A.length; j++) {
            if(A[j] < A[low]) {
                low = j;
            }
        }

        var temp = A[i];
        A[i] = A[low];
        A[low] = temp;  
    }

    return A;
}

console.log(selectionSort([31 ,41, 59, 26, 41, 58]));