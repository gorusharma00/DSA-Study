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
let ans;
function f(root, subroot){
    if (root == null && subroot == null) return true;
    if (root == null || subroot == null) return false;

    return (root.val == subroot.val) && f(root.left, subroot.left) && f(root.right, subroot.right);
    
}

var isSubtree = function(root, subRoot) {
    if (subRoot == null) return true; // An empty tree is a subtree of any tree
    if (root == null) return false; // An empty tree can't contain a non-empty subtree
    // Check if the tree rooted at the current node is identical to subRoot

    if(f(root, subRoot)) return true;

    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};