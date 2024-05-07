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
    if(!root) return "";

    let str = ""
    let qu = [];
    qu.push(root);
    while(qu.length > 0){
        let curr = qu.shift();

        if(curr === null){
            str += "#,";
        }else{
            str += curr.val + ",";
            qu.push(curr.left);
            qu.push(curr.right);
        }
    }
    return str
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if(data === "") return null;

    let s = data.split(",");
    let qu = [];

    let rootVal = s.shift();
    let root = new TreeNode(parseInt(rootVal));

    qu.push(root);

    while(qu.length > 0){
        let node = qu.shift();

        let leftVal = s.shift();

        if(leftVal !== "#"){
            let leftNode = new TreeNode(parseInt(leftVal));
            node.left = leftNode;
            qu.push(leftNode);
        }

        let rightVal = s.shift();

        if(rightVal !== "#"){
            let rightNode = new TreeNode(parseInt(rightVal));
            node.right = rightNode;
            qu.push(rightNode);
        }
    }
    return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

 //both the serialize and deserialize functions have a time complexity of O(n) and a space complexity of O(n)