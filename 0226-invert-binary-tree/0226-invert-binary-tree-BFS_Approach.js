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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(!root) return null;
    const qu = [root];  // here qu look like [[all elements of binary tree level wise]]
    while(qu.length > 0){
        const curr = qu.shift();  // Remove the current node from the queue
        let temp = curr.left;
        curr.left = curr.right;
        curr.right = temp;

        if(curr.left) qu.push(curr.left);
        if(curr.right) qu.push(curr.right);
    }
   
    return root;
};