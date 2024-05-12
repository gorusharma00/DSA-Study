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
var widthOfBinaryTree = function(root) {
    let qu = [];

    let ans = 0;

    let left = null;
    let right = null;
    let last = null;

    qu.push([root, 0]);
    qu.push(null);

    while(qu.length > 0){

        let element = qu.shift();

        if(element == null){
            right = last[1];
            ans = Math.max(ans, right - left + 1);

            if(qu.length != 0){
                qu.push(null);
                left = qu[0][1];
            }else{
                ans = Math.max(ans, right - left + 1);
            }

        }else{
            last = element;

            if(element[0].left){
                qu.push([element[0].left, element[1] * 2 + 1]);
            }

            if(element[0].right){
                qu.push([element[0].right, element[1] * 2 + 2]);
            }
        }
    }
    return ans;
};