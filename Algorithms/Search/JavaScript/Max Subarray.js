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

    for(var i = mid + 1; i < high + 1; i++) {
        sum += A[i];

        if(sum > rightSum) {
            rightSum = sum;
            maxRight = i;
        }
    }

    return [maxLeft, maxRight, leftSum + rightSum]
}

var arr = [13, -3, -25, 20, -3, -16, -23, 18, 20, -7, 12, -5, -22, 15, -4, 7];
// console.log(findMaxCrossingSub(arr, 0, Math.floor((arr.length - 1) / 2), arr.length - 1));

/*
    Max Subarray - Maxiumum Subarray
    Logarthimic
*/
function findMaxSub(A, low, high) {
    var leftLow, leftHigh, leftSum;
    var rightLow, rightHigh, rightSum;
    var crossLow, crossHigh, crossSum;

    if(low == high) {
        return [low, high, A[low]];
    } else {
        mid = Math.floor((low + high) / 2);
        [leftLow, leftHigh, leftSum] = findMaxSub(A, low, mid);
        [rightLow, rightHigh, rightSum] = findMaxSub(A, mid + 1, high);
        [crossLow, crossHigh, crossSum] = findMaxCrossingSub(A, low, mid, high);

        if(leftSum >= rightSum && leftSum >= crossSum) {
            return [leftLow, leftHigh, leftSum];
        } else if(rightSum >= leftSum && rightSum >= crossSum) {
            return [rightLow, rightHigh, rightSum];
        } else {
            return [crossLow, crossHigh, crossSum];
        }
    }
}

var arr = [13, -3, -25, 20, -3, -16, -23, 18, 20, -7, 12, -5, -22, 15, -4, 7];
console.log(findMaxSub(arr, 0, arr.length - 1));