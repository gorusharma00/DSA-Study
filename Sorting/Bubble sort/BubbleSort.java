public class BubbleSort{
    public static void bubbleSort(int[] arr){
        int n = arr.length;
        for(int i = 0; i < n; i++){
            boolean isSwap = false;
            for(int j = 0; j < n- i - 1; j++){
                // here n- i- 1 because we need to go till second last because we are comparing
                if(arr[j] > arr[j+1]){
                    int temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                    isSwap = true;
                } 
            }
            if(isSwap == false) return;
        }
    }

    public static void main(String[] args) {
        int[] arr = {10,3,-2,-1,4,3,2,1};
        bubbleSort(arr);

        for(int i: arr){
            System.out.println(i);
        }
    }
}