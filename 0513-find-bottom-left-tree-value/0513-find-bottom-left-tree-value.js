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
var findBottomLeftValue = function(root) {
    let qu = [];
    qu.push(root);
    // qu.push(null);

    let leftMost;

    while(qu.length > 0){
        let curr = qu.shift();

        leftMost = curr.val;
        if(curr.right){
            qu.push(curr.right);
        }

        if(curr.left){
            qu.push(curr.left);
        }
    }
    return leftMost;
};