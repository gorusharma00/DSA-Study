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
function f(root){
    if(root == null) return;

    let temp = root.left;
    root.left = root.right;
    root.right = temp;

    f(root.left);
    f(root.right);
}

var invertTree = function(root) {
    f(root);
    return root;
};

// time complexity => o(n)