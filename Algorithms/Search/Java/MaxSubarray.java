package Algorithms.Search.Java;
import java.util.Arrays;

class Solution {
    public static void main(String[] args) {
        int[] arr = {13, -3, -25, 20, -3, -16, -23, 18,
                    20, -7, 12, -5, -22, 15, -4, 7};

        System.out.println(Arrays.toString(maximumSubArrayLinear(arr)));
        System.out.println(
            Arrays.toString(findMaxSubArray(arr,0,arr.length - 1))
        );
    }

    public static int[] maximumSubArrayLinear(int[] A) {
        int max = Integer.MIN_VALUE;
        int sum = Integer.MAX_VALUE;

        int low = 0;
        int high = 0;
        int currentLow = 0;

        for(int i = 0; i < A.length; i++) {
            int currentHigh = i;

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

        return new int[] {low, high, max};
    }

    public static int[] findMaxCrossingSubArray(int[] A, int low, int mid, int high) {
        int leftMax = mid;
        int leftSum = Integer.MIN_VALUE;
        int sum = 0;

        for(int i = mid; i >= low; i--) {
            sum += A[i];

            if(sum > leftSum) {
                leftSum = sum;
                leftMax = i;
            }
        }

        int rightMax = mid + 1; 
        int rightSum = Integer.MIN_VALUE;
        sum = 0;

        for(int i = mid + 1; i <= high; i++) {
            sum += A[i];

            if(sum > rightSum) {
                rightSum = sum;
                rightMax = i;
            }
        }

        return new int[] {leftMax, rightMax, (leftSum + rightSum)};
    }

    public static int[] findMaxSubArray(int[] A, int low, int high) {
        if(low == high) {
            return new int[] {low, high, A[low]};
        } else {
            int mid = (int) Math.floor((low + high) / 2);
            int[] left = findMaxSubArray(A, low, mid);
            int[] right = findMaxSubArray(A, mid + 1, high);
            int[] cross = findMaxCrossingSubArray(A, low, mid, high);

            if(left[2] >= right[2] && left[2] >= cross[2]) {
                return left;
            } else if(right[2] >= left[2] && right[2] >= cross[2]) {
                return right;
            } else {
                return cross;
            }
        }
    }
}