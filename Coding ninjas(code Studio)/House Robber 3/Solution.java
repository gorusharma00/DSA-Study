import java.util.* ;
import java.io.*; 
/*************************************************************
    
    Following is the Binary Tree node structure:

    class BinaryTreeNode {

	int data;
	BinaryTreeNode left;
	BinaryTreeNode right;
	
	BinaryTreeNode(int data) {
		this.data = data;
		left = null;
		right = null;
	   }
    }

*************************************************************/

public class Solution {
	public static HashMap<BinaryTreeNode, Integer> map = new HashMap<>();
	public static int f(BinaryTreeNode root){

		if(root == null) return 0;

		if(map.containsKey(root)) return map.get(root);

		int ans = 0;

		if(root.left != null){
			ans += f(root.left.left) + f(root.left.right); // first goes to left subtree take all sum to root
																		 // by leaving two directly connect nodes
		}

		if(root.right != null){
			ans += f(root.right.left) + f(root.right.right);
		}

		ans = Math.max(ans + root.data, f(root.left) + f(root.right));
		map.put(root, ans);

		return ans;
	}
	public static int fun(BinaryTreeNode root) {
		// Write your code here.
		return f(root);
		
	}
}

