public class insertionSort {
    public static void insertion(int[] arr){
        int n = arr.length;

        for(int i = 1; i < n; i++){
            int el = arr[i];
            int j;

            for(j = i - 1; j >= 0; j--){
                if(arr[j] > el){
                    arr[j+1] = arr[j];
                }else{
                    // arr[j] <=el
                    break;
                }
            }

            arr[j+1] = el;
        }
    }

    public static void main(String[] args) {
        int[] arr = {4,1,2,5,6,10};

        insertion(arr);

        for(int i: arr){
            System.out.print(i + " ");
        }
    }
}
