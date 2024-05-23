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
    if(root == null) return null;

    if(root.val < val){
        return f(root.right, val)
    } else if(root.val > val){
        return f(root.left, val);
    }else {
        return root;
    }

}
var searchBST = function(root, val) {
    return f(root, val);
};

// tc => o(logn)