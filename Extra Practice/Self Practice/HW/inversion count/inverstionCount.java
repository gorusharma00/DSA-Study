public class inverstionCount{
    public static void main(String[] args) {
        int[] arr = {5,2,3,8,6,1};
        int result = numberOfInversions(arr, arr.length);
        System.out.println(result);
    }

    private static int count =0;
    public static int numberOfInversions(int []a, int n) {
        // Write your code here.
        mergehelper(a);
        return count;
    }

    public static void mergehelper(int[] arr){
        int n = arr.length;
        if(n == 1) return;
        int[] left = new int[n/2];
        int[] right = new int[n- n/2]; 

        for(int i=0; i<n/2; i++){
            left[i] = arr[i];
        }
        for(int i=0; i<n-n/2; i++){
            right[i] = arr[i+n/2];
        }

        mergehelper(left);
        mergehelper(right);
        merge(arr, left, right);
    }

    public static void merge(int[] arr, int[] a, int[] b){
        int i=0,j=0,k=0;
        while(i<a.length && j<b.length){
            if(a[i] <= b[j]){
                arr[k] = a[i];
                i++;
                k++;
            }else{
                arr[k] = b[j];
                j++;
                k++;
                count += a.length - i;
            }
        }
        while(i<a.length){
            arr[k] = a[i];
            i++;
            k++;
        }
        while(j<b.length){
            arr[k] = b[j];
            j++;
            k++;
        }
    }
}

/*
 * 
class Main
{
	public static void main (String[] args) throws java.lang.Exception
	{
		Scanner scanner = new Scanner(System.in);
        int t = scanner.nextInt();
        while (t > 0) {
            int n = scanner.nextInt();
            int[] A = new int[n];
            for (int i = 0; i < n; i++) {
                A[i] = scanner.nextInt();
            }
            ans = 0; // Reset 'count' for each test case
            mergeSort(A, 0, n - 1);
            System.out.println(ans);
            t--;
        }
        scanner.close();
	}
	
	public static long ans = 0; // Initialize inversion count variable
    
    public static void mergeSort(int[] arr, int l, int r) {
        if (l < r) {
            int m = (l + r) / 2;
            mergeSort(arr, l, m);       // Sort first half
            mergeSort(arr, m + 1, r);   // Sort second half
            merge(arr, l, m, r);        // Merge the sorted halves
        }
    }
 
    public static void merge(int[] arr, int s, int m, int e) {
        int[] temp = new int[e - s + 1];
        int p1 = s, p2 = m + 1, p3 = 0;
 
        while (p1 <= m && p2 <= e) {
            if (arr[p1] <= arr[p2]) {
                temp[p3] = arr[p1];
                p1++;
            } else {
                // arr[p1] > arr[p2]
                ans += (m - p1 + 1);
                temp[p3] = arr[p2];
                p2++;
            }
            p3++;
        }
 
        while (p1 <= m) {
            temp[p3] = arr[p1];
            p1++;
            p3++;
        }
 
        while (p2 <= e) {
            temp[p3] = arr[p2];
            p2++;
            p3++;
        }
 
        // Copying elements from temp back to arr
        for (int i = 0; i < temp.length; i++) {
            arr[s + i] = temp[i];
        }
    }
} 
 */