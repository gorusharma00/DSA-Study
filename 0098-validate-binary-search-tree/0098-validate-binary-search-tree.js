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
 * @return {boolean}
 */
let lastVal;
let bool;
function f(root){
    if(root == null) return;

    f(root.left);

    if(root.val < lastVal){
        bool = false;
    }
    lastVal = root.val;

    f(root.right);
    
}
var isValidBST = function(root) {
    lastVal = -Infinity;
    bool = true;
    f(root);
    return bool;
};