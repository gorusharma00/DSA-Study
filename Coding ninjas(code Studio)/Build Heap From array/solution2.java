import java.util.* ;
import java.io.*; 
public class solution2
{
	public static void upheapify(int idx, int[] arr){
		while(idx > 0){
			int pi = (idx - 1) / 2;

			if(arr[pi] > arr[idx]){
				int temp = arr[pi];
				arr[pi] = arr[idx];
				arr[idx] = temp;
				idx = pi;
			}else{
				break;
			}
		}
	}


	public static int[] buildMinHeap(int[] arr)
	{
		// Write your code here
        
		for(int i = 0; i < arr.length; i++){
			upheapify(i, arr);
		}
		
		return arr;
	}
}

