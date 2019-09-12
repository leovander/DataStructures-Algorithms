/*
    Binary Search
*/
function binarySearch(A, value, p, r) {
    if(p > r) {
        return false;
    }

    var mid = Math.floor((p + r) / 2);

    if(A[mid] == value) {
        return true;
    }

    if(A[mid] > value) {
        return binarySearch(A, value, p, mid - 1);
    } else {
        return binarySearch(A, value, mid + 1, r);
    }
}

console.log(binarySearch(
    [1, 3, 4, 6, 7, 8, 10, 13, 14, 18, 19, 21, 24, 37, 40,45, 71],20, 0, 16)
);