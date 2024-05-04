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
 * @return {number[]}
 */
let result;
function preorder(root){
    if(root == null) return null;
    // if the root is not null; it has some data;
    // process the root
    result.push(root.val);

    preorder(root.left); // go to left subtree recursively
    preorder(root.right);  // go to right subtree recursively
}

var preorderTraversal = function(root) {
    result = [];
    preorder(root);
    return result;
};