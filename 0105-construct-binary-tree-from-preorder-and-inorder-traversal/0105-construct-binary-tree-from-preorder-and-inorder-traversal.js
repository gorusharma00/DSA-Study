/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
let idx; 
function f(preorder, inorder, start, end){
    if(start > end){
        return null;
    }

    let rootVal = preorder[idx]; // it gives value where idx points in preorder
    let i = inorder.findIndex((el) => el == rootVal);
    idx++;

    let root = new TreeNode(rootVal);

    root.left = f(preorder, inorder, start, i-1);
    root.right = f(preorder, inorder, i+1, end);

    return root;
}

var buildTree = function(preorder, inorder) {
    let n = preorder.length // both pre and inorder are of same length becoz same tree

    idx = 0;

    return f(preorder, inorder, 0, n-1);
};

/*
In JavaScript, primitive types like numbers are passed by value, not by reference. 
This means that when you increment idx inside the function f, 
it doesn't affect the idx in the calling function.
that's y makes it global
*/
