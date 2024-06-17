import java.util.* ;
import java.io.*; 
public class Solution
{	
	public static void downheapify(int idx, int[] arr){
		while(idx < arr.length){
			int lc = 2 * idx + 1;
			int rc = 2 * idx + 2;
			int minEl = idx; // assume root is min for now

			if(lc < arr.length && arr[minEl] > arr[lc]){
				minEl = lc;
			}

			if(rc < arr.length && arr[minEl] > arr[rc]){
				minEl = rc;
			}

			if(minEl != idx){
				int temp = arr[idx];
				arr[idx] = arr[minEl];
				arr[minEl] = temp;
				idx = minEl;
			}else{
				break;
			}
		}
	}
	public static int[] buildMinHeap(int[] arr)
	{
		// Write your code here

		// starts from half so first elements at down wil be come upward if they are less
		for(int i = arr.length - 1; i >= 0; i--){
			downheapify(i, arr);
		}

		return arr;
	}
}

