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
function dfs(root){  // return [withroot, without root]
    if(root == null) return [0,0];

    let leftPair = dfs(root.left);
    let rightPair = dfs(root.right);

    let withRoot = root.val + leftPair[1] + rightPair[1] // because without root we sotred at 1 place
    let withoutRoot = Math.max(leftPair[0], leftPair[1]) + Math.max(rightPair[0], rightPair[1]);  // because if we do not rob root, don't have restriction we can choose any

    return [withRoot, withoutRoot];
}

var rob = function(root) {
    let result = dfs(root)
    return Math.max(result[0], result[1]);
};

