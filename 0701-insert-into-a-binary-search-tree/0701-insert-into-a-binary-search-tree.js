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
 * @param {number} val
 * @return {TreeNode}
 */
function f(root, val){
    if(root == null) return new TreeNode(val);

    if(root.val < val){
        // value can only insert into right;
        root.right = f(root.right, val);
    }else{
        root.left = f(root.left, val);
    }

    return root;
}
var insertIntoBST = function(root, val) {
    return f(root, val);
};