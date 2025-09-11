

public class selectionSort {

    public static void selectionsort(int[] arr){
        int n = arr.length;

        for(int i = 0; i < n-1; i++){
            int min_idx = findMinElement(arr, i);
            if(min_idx != i){
                int temp = arr[i];
                arr[i] = arr[min_idx];
                arr[min_idx] =  temp;
            }
        }
    }

    public static int findMinElement(int[] arr, int i){
        int min_el_idx = i;
        for(int j = i+1 ; j < arr.length; j++){
            if(arr[j] < arr[min_el_idx]){
                min_el_idx = j;
            }
        }
        return min_el_idx;
    }


    public static void main(String[] args) {
        int[] arr = {1,3,4,5,6,10,2,3,1};
        selectionsort(arr);
        for(int element: arr){
            System.out.print(element + " ");
        }
    }
}


