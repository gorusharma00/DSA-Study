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
 * @param {number} k
 * @return {number}
 */
let res;
let count;

function f(root){
    if(root == null) return;

    f(root.left);

    count--;
    if(count == 0){
        res = root.val;
        return; // to stop further traversal.
    }
    
    f(root.right);
}

var kthSmallest = function(root, k) {
    count = k;
    res = null;
    f(root);
    return res;
};