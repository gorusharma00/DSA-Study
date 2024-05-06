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
function preorder(root){
    if(root == null) return;

    let temp = root.left;
    root.left = root.right;
    root.right = temp;

    preorder(root.left);
    preorder(root.right);
}

var invertTree = function(root) {
    preorder(root);
    return root;
};