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
 * @param {number} k
 * @return {number}
 */
let arr;
let count;

function f(root){
    if(root == null || count <= 0) return;

    f(root.left);
    if(count > 0){
        arr.push(root.val);
        count--;
    }
    f(root.right);
}
var kthSmallest = function(root, k) {
    arr = [];
    count = k;
    f(root);
    console.log(arr);
    return arr[k-1] // because k is 1- indexed.
};

// we know if we do inorder on bst we get sorted tree.