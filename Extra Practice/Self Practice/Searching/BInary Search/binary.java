public class binary{
    public static int binarySearch(int[] arr, int p){
        int low =0;
        int high = arr.length -1;
        while(low<=high){
            int mid = low + (high-low)/2;
            if(arr[mid] ==p){
                return mid;
            }else if(arr[mid] < p){
                low = mid+1;
            }else{
                high = mid-1;
            }
        }
        return -1;
    }
    public static void main(String[] args) {
        int[] arr = {1,3,9,10,29,40};
        int p = 3;
        System.out.println(binarySearch(arr, p));
    }
}