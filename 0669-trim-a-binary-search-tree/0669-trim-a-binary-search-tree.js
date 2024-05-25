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
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
function f(root, low, high){
    if(root == null) return null;

    if(root.val < low){
        return f(root.right, low, high);
    }else if(root.val > high){
        return f(root.left, low, high);
    }else{
        root.left = f(root.left, low, high);
        root.right = f(root.right, low, high);
    }

    return root;
}   

var trimBST = function(root, low, high) {
    return f(root, low, high);
}