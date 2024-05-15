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
 * @return {boolean}
 */
function f(root, min, max){
    if(root == null) return true;

    if(min != null && min >= root.val){
        return false;
    }

    if(max != null && max <= root.val){
        return false;
    }

    // if any condition of above returns false ans will be false;
    if(!f(root.left, min, root.val) || !f(root.right, root.val, max)){
        return false;
    }

    return true;

}
var isValidBST = function(root) {
    return f(root, null, null);
};