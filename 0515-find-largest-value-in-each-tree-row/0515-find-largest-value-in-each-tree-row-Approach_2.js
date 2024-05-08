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
 * @return {number[]}
 */
var largestValues = function(root) {
    if (!root) return [];
    
    let qu = [];

    qu.push(root);
    qu.push(null);
    let largest = -Infinity // to store largest no.

    let result = [];

    while(qu.length > 0){
        let curr = qu.shift();   // takes o(N) complexity, can also try custom queue

        if(curr == null){
            if(qu.length > 0){
                qu.push(null);
                result.push(largest);
                largest = -Infinity;
            }else{
                result.push(largest);
            }
        }else{
            largest = Math.max(largest, curr.val);

            if(curr.left){
                qu.push(curr.left);
            }

            if(curr.right){
                qu.push(curr.right);
            }
        }
    }

    return result;
};