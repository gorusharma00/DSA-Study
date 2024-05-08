/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
function f(root, subroot){
    if(root == null &&  subroot == null){
        return true;
    }
    if(root == null || subroot == null){
        return false;
    }

    return root.val == subroot.val && f(root.left, subroot.left) && f(root.right, subroot.right);
}

var isSubtree = function(root, subRoot) {
    if(subRoot == null) return true;
    if(root == null) return false;

    if(f(root, subRoot)) return true;  // means trees are same

    let left = isSubtree(root.left, subRoot);  
    let right = isSubtree(root.right, subRoot);

    return left || right;
};