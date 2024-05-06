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
let map;
function f(root){
    if(root == null) return 0;

    if(map.has(root)) return map.get(root);

    let ans = 0;

    if(root.left != null){
        ans += f(root.left.left) + f(root.left.right);
    }

    if(root.right != null){
        ans += f(root.right.left) + f(root.right.right)
    }
    
    ans = Math.max(ans + root.val , f(root.left) + f(root.right));
    map.set(root, ans)
    
    return ans;
}

var rob = function(root) {
    map = new Map();
    return f(root);
}

// time complexity = o(n)
// space complexity = o(n) bec. of hasmap