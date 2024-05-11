/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {
    if(!root1) return root2;
    if(!root2) return root1;

    let qu1 = [];
    let qu2 = [];

    qu1.push(root1);
    qu2.push(root2);
    let root = root1;

    while(qu1.length > 0 || qu2.length > 0){
        let curr1 = qu1.shift();
        let curr2 = qu2.shift();

        curr1.val += curr2.val;

        if(!curr1.left && curr2.left){
            curr1.left = curr2.left
        }else if(curr1.left && curr2.left){
            qu1.push(curr1.left);
            qu2.push(curr2.left);     

        }

        /*
        In cases where curr2.left or curr2.right does not exist, 
        there's no explicit action taken because there's nothing 
        from root2 to add or merge into root1 at that position.
        */

        if(!curr1.right && curr2.right){
            curr1.right = curr2.right;
        }else if(curr1.right && curr2.right){
            qu1.push(curr1.right);
            qu2.push(curr2.right);
        }
    }

    return root;
};