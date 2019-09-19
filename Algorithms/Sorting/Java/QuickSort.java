package Algorithms.Sorting.Java;
import java.util.Arrays;
import java.util.Random;

class Solution {
    public static void main(String[] args) {
        int[] arr = {2, 8, 7, 1, 3, 5, 6, 4};

        randomizedQuickSort(arr, 0, arr.length - 1);

        System.out.println(Arrays.toString(arr));
    }

    public static int partition(int[] A, int start, int end) {
        int pivot = A[end];
        int i = start - 1;

        for(int j = start; j < end; j++) {
            if(A[j] <= pivot) {
                i = i + 1;
                
                int temp = A[i];
                A[i] = A[j];
                A[j] = temp;
            }
        }

        int temp = A[i + 1];
        A[i + 1] = A[end];
        A[end] = temp;

        return i + 1;
    }

    public static void quickSort(int[] A, int start, int end) {
        if(start < end) {
            int middle = partition(A, start, end);
            quickSort(A, start, middle - 1);
            quickSort(A, middle + 1, end);
        }
    }

    public static int randomizedPartition(int[] A, int start, int end) {
        int index = new Random().nextInt(end - start) + start;
        
        int temp = A[index];
        A[index] = A[end];
        A[end] = temp;

        return partition(A, start, end);
    }

    public static void randomizedQuickSort(int[] A, int start, int end) {
        if(start < end) {
            int middle = randomizedPartition(A, start, end);
            randomizedQuickSort(A, start, middle - 1);
            randomizedQuickSort(A, middle + 1, end);
        }
    }
}