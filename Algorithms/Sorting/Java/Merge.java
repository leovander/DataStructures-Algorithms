package Algorithms.Sorting.Java;
import java.util.Arrays;

class Solution {
    public static void main(String[] args) {
        int[] arr = {2, 4, 5, 7, 1, 2, 3, 6};

        mergeSort(arr, 0, arr.length - 1);

        System.out.println(Arrays.toString(arr));
    }

    public static void merge(int[] A, int start, int middle, int end) {
        int leftBound = middle - start + 1;
        int rightBound = end - middle;

        int[] L = new int[leftBound];
        int[] R = new int[rightBound];

        for(int i = 0; i < leftBound; i++) {
            L[i] = A[start + i];
        }

        for(int i = 0; i < rightBound; i++) {
            R[i] = A[middle + i + 1];
        }

        int i = 0;
        int j = 0;
        int k = start;

        while(i < leftBound && j < rightBound) {
            if(L[i] <= R[j]) {
                A[k] = L[i];
                i++;
            } else {
                A[k] = R[j];
                j++;
            }
            k++;
        }

        while(i < leftBound) {
            A[k] = L[i];
            i++;
            k++;
        }

        while(j < rightBound) {
            A[k] = R[j];
            j++;
            k++;
        }
    }

    public static void mergeSort(int[] A, int start, int end) {
        if(start < end) {
            int middle = (int) Math.floor((start + end) / 2);
            mergeSort(A, start, middle);
            mergeSort(A, middle + 1, end);
            merge(A, start, middle, end);
        }
    }
}