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
let lastVal;
let bool;
function f(root){
    if(root == null) return;

    f(root.left); // first go to left most

    if(root.val <= lastVal){  // it checks curr node(parent node) with last which sotres val of child node;
                            // also work with right in case of right last stores parent, curr will be child
        bool = false;
    }
    lastVal = root.val;

    f(root.right);
    
}
var isValidBST = function(root) {
    lastVal = -Infinity;
    bool = true;
    f(root);
    return bool;
};