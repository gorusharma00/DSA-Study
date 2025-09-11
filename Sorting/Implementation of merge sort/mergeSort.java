public class mergeSort {

    public static int[] merge2SortArray(int[] left, int[] right){
        int m = left.length;
        int n = right.length;

        int i = 0; 
        int j = 0;
        int k = 0;

        int[] result = new int[m + n];

        while(i <  m && j < n){ // this loop ends when either i == m or j == n
            if(left[i] <= right[j]){
                result[k] = left[i];
                i++;
                k++;
            }else{
                result[k] = right[j];
                j++;
                k++;
            }
        }

        // if j == n, nums2 is exhausted
        // we have elements left in nums1, lets fill that directly
        while(i < m){
            result[k] = left[i];
            i++;
            k++;
        }

        // if i == m, nums1 is exhausted
        // we have elements left in nums2, lets fill that directly
        while(j < n){
            result[k] = right[j];
            j++;
            k++;
        }

        return result;
    }

    public static int[] mergeSortHelper(int[] arr, int start, int end){
        if(start == end){
            int[] result = new int[1];
            result[0] = arr[start];
            return result;
        }
        int mid = (start + end) / 2;
        int[] left = mergeSortHelper(arr, start, mid);
        int[] right = mergeSortHelper(arr, mid + 1, end);

        return merge2SortArray(left, right);
    }

    public static void main(String[] args) {
        int[] arr = {5,4,3,2,1,-1,0,-2,-3};
        arr = mergeSortHelper(arr, 0, arr.length - 1);

        for(int num: arr){
            System.out.println(num);
        }
    }
}