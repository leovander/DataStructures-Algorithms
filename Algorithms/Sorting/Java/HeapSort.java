package Algorithms.Sorting.Java;
import java.util.Arrays;

class Solution {
    public static void main(String[] args) {
        int[] arr = {4, 1, 3, 2, 16, 9, 10, 14, 8, 7};

        int[] heap = buildMaxHeap(arr);
        System.out.println(Arrays.toString(heap));
        System.out.println(heapMaximum(heap));

        heapIncreaseKey(heap, 4, 15);
        System.out.println(Arrays.toString(heap));

        heap = maxHeapInsert(heap, 23);
        System.out.println(Arrays.toString(heap));

        int[] B = heapSort(arr);
        
        System.out.println(Arrays.toString(B));
    }

    public static int[] heapSort(int[] A) {
        int[] B = A.clone();
        B = buildMaxHeap(B);

        for(int i = B.length - 1; i >= 0; i--) {
            int temp = B[0];
            B[0] = B[i];
            B[i] = temp;

            maxHeapify(B, i, 0);
        }

        return B;
    }

    public static void maxHeapify(int[] A, int heapSize, int index) {
        int left = Left(index);
        int right = Right(index);
        int largest = index;

        if(left < heapSize && A[left] > A[index]) {
            largest = left;
        }

        if(right < heapSize && A[right] > A[largest]) {
            largest = right;
        }

        if(largest != index) {
            int temp = A[index];
            A[index] = A[largest];
            A[largest] = temp;
            
            maxHeapify(A, heapSize, largest);
        }
    }

    public static int[] buildMaxHeap(int[] A) {
        int[] B = A.clone();
        int heapSize = B.length;

        for(int i = (int) Math.floor(heapSize / 2) - 1; i >= 0; i--) {
            maxHeapify(B, heapSize, i);
        }

        return B;
    }

    public static int Parent(int index) {
        return (int) Math.floor(index / 2);
    }

    public static int Left(int index) {
        return 2 * index + 1;
    }

    public static int Right(int index) {
        return (2 * index) + 2;
    }

    public static int heapMaximum(int[] A) {
        if(A == null || A.length == 0) {
            return 0;
        }

        return A[0]; 
    }

    /*
        This ideally would be modifying the original array as heap-extract-max
        is meant to pop out the top item, shifting over all the other items.

        As we are not storing the initial array as a class member, I need to
        figure out how to modify the array and return back the max value in
        one shot.
    */
    public static int heapExtractMax(int[] A) {
        if(A == null || A.length == 0) {
            return 0;
        }

        int max = A[0];
        A[0] = A[A.length - 1];
        maxHeapify(A, A.length, 0);

        return max;
    }

    public static void heapIncreaseKey(int[] A, int index, int key) {
        if(key < A[index]) {
            System.out.println("new key is smaller than current key");
        }

        A[index] = key;

        while(index >= 0 && A[Parent(index)] < A[index]) {
            int temp = A[index];
            A[index] = A[Parent(index)];
            A[Parent(index)] = temp;
            index = Parent(index);
        }
    }

    public static int[] maxHeapInsert(int[] A, int key) {
        int[] B = Arrays.copyOf(A, A.length + 1);
        B[B.length - 1] = Integer.MIN_VALUE;
        heapIncreaseKey(B, B.length - 1, key);

        return B;
    }
}