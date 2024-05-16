/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if(root == null || root == p || root == q){
        return root;   // means if we found p or q we don't need to go deep
    }

    let left = lowestCommonAncestor(root.left, p, q);
    let right = lowestCommonAncestor(root.right, p, q);

    if(left == null){
        return right; // if any of one is null return other
    }else if(right == null){
        return left;
    }else{
        return root;  // case where both are not null, we get our result
    }
};