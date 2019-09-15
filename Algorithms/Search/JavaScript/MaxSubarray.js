/*
    Max Subarray
    Brute Force
*/
function maxSubBrute(A) {
    var max = -Number.MAX_VALUE;
    var low = 0;
    var high = 0;

    for(var i = 0; i < A.length; i++) {
        var sum = 0;

        for(var j = i; j < A.length; j++) {
            sum += A[j];
            
            if(sum > max) {
                max = sum;
                low = i;
                high = j;
            }
        }
    }

    return [low, high, max];
}

var arr = [13, -3, -25, 20, -3, -16, -23, 18, 20, -7, 12, -5, -22, 15, -4, 7];
// console.log(maxSubBrute(arr));

/*
    Max Subarray
    Linear
*/
function maxSubLinear(A) {
    var max = -Number.MAX_VALUE;
    var sum = -Number.MAX_VALUE;
    var low = 0;
    var high = 0;
    var currentLow = 0;

    for(var i = 0; i < A.length; i++) {
        var currentHigh = i;

        if(sum > 0) {
            sum += A[i];
        } else {
            currentLow = i;
            sum = A[i];
        }

        if(sum > max) {
            max = sum;
            low = currentLow;
            high = currentHigh;
        }
    }

    return [low, high, max];
}

var arr = [13, -3, -25, 20, -3, -16, -23, 18, 20, -7, 12, -5, -22, 15, -4, 7];
// console.log(maxSubLinear(arr));

/*
    Max Subarray - Crossing
    Logarithmic
*/
function findMaxCrossingSub(A, low, mid, high) {
    var maxLeft;
    var leftSum = -Number.MAX_VALUE;
    var sum = 0;

    for(var i = mid; i >= low; i--) {
        sum += A[i];

        if(sum > leftSum) {
            leftSum = sum;
            maxLeft = i;
        }
    }

    var maxRight;
    var rightSum = -Number.MAX_VALUE;
    sum = 0;

    for(var i = mid + 1; i <= high; i++) {
        sum += A[i];

        if(sum > rightSum) {
            rightSum = sum;
            maxRight = i;
        }
    }

    return [maxLeft, maxRight, (leftSum + rightSum)];
}

var arr = [13, -3, -25, 20, -3, -16, -23, 18, 20, -7, 12, -5, -22, 15, -4, 7];
// console.log(findMaxCrossingSub(arr, 0, Math.floor((arr.length - 1) / 2), arr.length - 1));

/*
    Max Subarray - Maxiumum Subarray
    Logarthimic
*/
function findMaxSub(A, low, high) {
    if(low == high) {
        return [low, high, A[low]];
    } else {
        var mid = Math.floor((low + high) / 2);
        var left = findMaxSub(A, low, mid);
        var right = findMaxSub(A, mid + 1, high);
        var cross = findMaxCrossingSub(A, low, mid, high);

        if(left[2] >= right[2] && left[2] >= cross[2]) {
            return left;
        } else if(right[2] >= left[2] && right[2] >= cross[2]) {
            return right
        } else {
            return cross;
        }
    }
}

var arr = [13, -3, -25, 20, -3, -16, -23, 18, 20, -7, 12, -5, -22, 15, -4, 7];
console.log(findMaxSub(arr, 0, arr.length - 1));