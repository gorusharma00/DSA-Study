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
 * @param {number} key
 * @return {TreeNode}
 */
function minValNode(root){
    let curr = root;
    // think smallest value in bst always ive in left side
    while(curr != null && curr.left != null){
        curr = curr.left;
    }
    return curr;
}

function f(root, key){
    if(root == null) return null;

    if(root.val > key){
        // go in left
        root.left = f(root.left, key);
    }else if(root.val < key){
        // go in right
        root.right = f(root.right, key);
    }else{
        if(root.left == null){
            return root.right;
        }else if(root.right == null){
           return root.left;
        }else{
            let minVal = minValNode(root.right);  // lowest value in right subtree can replace it
            root.val = minVal.val;
            root.right = f(root.right, minVal.val);
        }
    }
    return root;
}
var deleteNode = function(root, key) {
    return f(root, key);
};

//  the time complexity for both operations primarily depends on the height of the tree, 
// with the space complexity for the delete operation being influenced by the recursive nature of the implementation.