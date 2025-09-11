public class solution{
    public static int upperBound(int[] arr, int x){
        int n = arr.length;
        int low=0,high= n-1;
        int ans = arr.length;
        while(low<=high){
            int mid = low+ (high-low)/2;
            if(arr[mid] <= x){
                low = mid+1;  
            }else{
                ans = mid;
                high = mid-1;
            }
        }
        return ans;
    }
    public static void main(String[] args) {
        int[] arr = {1,1,1,2,2,2,2,3,4,4,5};
        System.out.println(upperBound(arr, 2));
    }
}

//give first index that is greater than target