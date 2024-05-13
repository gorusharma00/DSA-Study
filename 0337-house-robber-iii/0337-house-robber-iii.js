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
let mpTrue;
let mpFalse;

function f(root, isPR){
    if(root == null) return 0;

    if(isPR && mpTrue.has(root)){
        return mpTrue.get(root);
    }

    if(!isPR && mpFalse.has(root)){
        return mpFalse.get(root);
    }

    if(!isPR){
        // if parent is not robbed either we can take curr node or not.
        const leave = f(root.left, false) + f(root.right, false) // means if we leave it can be parent of any other node downwards
        const take = root.val + f(root.left, true) + f(root.right, true);

        const ans = Math.max(leave, take);

        mpFalse.set(root, ans);
        return ans;
    }else{
        // if parent is robbed
        const leave = f(root.left, false) + f(root.right, false);

        const ans = leave;
        mpTrue.set(root, ans);
        return ans;
    }
}

var rob = function(root) {
    mpTrue = new Map();
    mpFalse = new Map();

    return f(root);
};