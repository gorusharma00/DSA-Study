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
function postorder(root){
    if(root == null) return null;
    // if the root is not null; it has some data;

    postorder(root.left); // go to left subtree recursively
    postorder(root.right);  // go to right subtree recursively

    // process the root
    result.push(root.val);

}
var postorderTraversal = function(root) {
    result = [];
    postorder(root);
    return result;
};