/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
function f(root1, root2){
    if(root1 == null) return root2
    if(root2 == null) return root1


    let root = new TreeNode(root1.val + root2.val);

    root.left = f(root1.left, root2.left);
    root.right = f(root1.right, root2.right);

    return root;
}
var mergeTrees = function(root1, root2) {
    return f(root1, root2);
};