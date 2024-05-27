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
let moves;
function f(root){
    if(root == null) return 0;

    let l = f(root.left);
    let r = f(root.right);

    let total_coins = l + r + root.val;  // total coins at any node

    moves += Math.abs(l) + Math.abs(r);

    return total_coins -1 // just keep 1 coin and return all others
}
var distributeCoins = function(root) {
    moves = 0;
    f(root);
    return moves;
};

// tc => o(n) means we visited all nodes once;
// sc => o(h) due to recursive space