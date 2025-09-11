public class quick_Sort {
    public static void swap(int[] arr, int i, int j){
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    public static int parition(int[] arr, int start, int end){
        int pivot_idx = (int)(Math.random() * (end-start))+start;
        int pivot_value = arr[pivot_idx];
        swap(arr, pivot_idx, end);
        int j =start;
        for(int i=start; i<end; i++){
            if(arr[i] < pivot_value){
                swap(arr, i, j);
                j++;
            }
        }
        swap(arr, j, end);
        return j;
    }

    public static int[] sort(int[] arr, int start, int end){
        if(start<end){
            int pivot_idx = parition(arr, start, end); 
            sort(arr, start, pivot_idx-1);
            sort(arr, pivot_idx+1, end);
        }
        return arr;
    }

    public static void main(String[] args) {
        int[] arr = {-1,4,5,6,10,24,2,9};
        arr = sort(arr, 0, arr.length-1);
        for(int num: arr){
            System.out.print(num + " ");
        }
    }
}
