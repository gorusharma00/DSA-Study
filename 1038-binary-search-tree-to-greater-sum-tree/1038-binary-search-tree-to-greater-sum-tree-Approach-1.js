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
 * @return {TreeNode}
 */
let sum; // to store sum of nodes greater than curr node
function f(root){
    if(root == null) return;

    f(root.right); // start with right becoz in bst largest value is int right;
    sum += root.val;
    root.val = sum;
    f(root.left);
}
var bstToGst = function(root) {
    sum = 0;
    f(root);
    return root;
};