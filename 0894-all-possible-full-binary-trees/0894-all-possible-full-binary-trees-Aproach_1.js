/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
function f(n){
    if(n % 2 == 0) return []; // because only odd can make full BT
    if(n == 1){
        let root = new TreeNode(0);
        return [root];
    }

    let result = [];
    for(let i = 1; i < n; i += 2){
        // incremented by 2 because we need odd i

        let leftAllFBT = f(i);
        let rightAllFBT = f(n - i -1);

        // now pairing
        for(let l of leftAllFBT){
            for(let r of rightAllFBT){
                let root = new TreeNode(0);
                root.left = l;
                root.right = r;
                result.push(root);
            }
        }
    }
    return result;
}

var allPossibleFBT = function(n) {
    return f(n);
};