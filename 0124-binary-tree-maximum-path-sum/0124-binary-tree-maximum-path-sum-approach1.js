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
 * @return {number}
 */
let ans;
function f(root){
    if(root == null) return 0; // base case 

    let leftBS = f(root.left) + root.val;
    let rightBS = f(root.right) + root.val;
    // either can be max beetween left, right, root.val, left + right + root because
    // ans can be pass through root also.
    
    ans = Math.max(ans, root.val, leftBS, rightBS, leftBS + rightBS - root.val); // we subtract root.val because we already added it twice
    return Math.max(leftBS, rightBS, root.val);
    
}
var maxPathSum = function(root) {
    ans = -Infinity;
    f(root);
    return ans;
};