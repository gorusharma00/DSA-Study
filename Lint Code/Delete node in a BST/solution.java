// link => https://www.lintcode.com/problem/remove-node-in-binary-search-tree/description

/**
 * Definition of TreeNode:

 * public class TreeNode {
 *     public int val;
 *     public TreeNode left, right;
 *     public TreeNode(int val) {
 *         this.val = val;
 *         this.left = this.right = null;
 *     }
 * }
 
**/


 public class solution {
    /**
     * @param root: The root of the binary search tree.
     * @param value: Remove the node with given value.
     * @return: The root of the binary search tree after removal.
     */
    public static TreeNode minValNode(TreeNode root){
        TreeNode curr = root;
        while(curr != null && curr.left != null){
            curr = curr.left;  // because min val lies there
        }

        return curr;
    }

    public static TreeNode f(TreeNode root, int value){
        if(root == null) return null;

        if(root.val < value){
            // live in right side
            root.right = f(root.right, value);
        }else if(root.val > value){
            // live in left side
            root.left = f(root.left, value);
        }else{
            if(root.left == null){
                return root.right;
            }else if(root.right == null){
                return root.left;
            }else{
                // value greater than the cuur node will be in right
                TreeNode minVal = minValNode(root.right);
                root.val = minVal.val; // change the value 
                root.right = f(root.right, minVal.val);  // now delete that value from right
            }
        }
        return root;
    }

    public TreeNode removeNode(TreeNode root, int value) {
        // write your code here
        return f(root, value);
    }
}