/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public static TreeNode f(TreeNode root, int key){
        if(root == null) return null;

        if(root.val > key){
            // go in left;
            root.left = f(root.left, key);
        }else if(root.val < key){
            // go in right;
            root.right = f(root.right, key);
        }else {
            // where we find root.val == key, that is we have to delete

            if(root.left == null && root.right == null){
                // case where we find leaf node
                return null;
            }else if(root.left == null){
                // case where subtree has only one child either left or right
                return root.right;
            }else if(root.right == null){
                return root.left;
            }else {
                // case where subtress has both child

                TreeNode temp = root.right;
                while(temp != null && temp.left != null){
                    temp = temp.left;
                }

                root.val = temp.val;

                root.right = f(root.right, temp.val);
            }
        }

        return root;
    }

    public TreeNode deleteNode(TreeNode root, int key) {
        return f(root, key);
    }
}