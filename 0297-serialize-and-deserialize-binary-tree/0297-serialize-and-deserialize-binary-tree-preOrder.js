/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */

var serialize = function(root) {
    if(!root) return "#";

    return root.val + "," + serialize(root.left) + "," + serialize(root.right);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
function buildTree(s){
    let val = s.shift();

    if(val === "#"){
        return null;
    }

    let node = new TreeNode(parseInt(val));
    node.left = buildTree(s)
    node.right = buildTree(s);

    return node;
}

var deserialize = function(data) {
    if(data === "") return null;

    let s = data.split(",");
    return buildTree(s);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

 //both the serialize and deserialize functions have a time complexity of O(n) and a space complexity of O(n)