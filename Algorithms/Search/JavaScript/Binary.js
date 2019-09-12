/*
    Binary Search
    Recursive
*/
function binarySearchRecursive(A, value, p, r) {
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

console.log(binarySearchRecursive(
    [1, 3, 8, 10, 13, 14, 18, 19, 21, 24, 37, 40, 71],20, 0, 12)
);


/*
    Binary Search
    Non-Recursive
*/
function binarySearch(A, value, low, high) {
    while(low <= high) {
        var mid = Math.floor((low + high) / 2);

        if(value == A[mid]) {
            return mid;
        } else if(value < A[mid]) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return null;
}

console.log(binarySearch(
    [1, 3, 8, 10, 13, 14, 18, 19, 21, 24, 37, 40, 71], 13, 0, 12)
);