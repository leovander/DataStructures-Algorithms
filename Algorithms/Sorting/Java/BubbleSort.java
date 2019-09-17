package Algorithms.Sorting.Java;
import java.util.Arrays;

class Solution {
    public static void main(String[] args) {
        int[] arr = {6, 5, 3, 1, 8, 7, 2, 4, 3};

        bubbleSort(arr);        

        System.out.println(Arrays.toString(arr));
    }

    public static void bubbleSort(int[] A) {
        for(int i = 0; i < A.length; i++) {
            for(int j = 1; j < A.length - i; j++) {
                if(A[j] < A[j - 1]) {
                    int temp = A[j - 1];
                    A[j - 1] = A[j];
                    A[j] = temp;
                }
            }
        }
    }   
}