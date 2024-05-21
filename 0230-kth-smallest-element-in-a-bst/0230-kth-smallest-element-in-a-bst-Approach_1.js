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
let arr;
function f(root){
    if(root == null) return null;

    f(root.left);
    arr.push(root.val);
    f(root.right);
}
var kthSmallest = function(root, k) {
    arr = [];
    f(root);
    return arr[k-1] // because k is 1- indexed.
};

// we know if we do inorder on bst we get sorted tree.