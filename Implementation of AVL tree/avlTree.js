const insertAVL = function(items, threshold){
    if(!items || items.length === 0){
        return null;
    }

    let root = new AVLNode(items[0]);

    for(let i = 1; i < items.length; i++){
        root = insert(root, items[i], threshold);
    }

    return convertAVLNodes_toTreeNode(root);
}

const insert = function(node, key, threshold){
    // here key is the value in items(given array)
    if(node == null){
        return new AVLNode(key);
    }

    if(key < node.val){
        node.left = insert(node.left, key, threshold);
    }else {
        node.right = insert(node.right, key, threshold);
    }

    // here 1 is added to inlcude node also
    node.height = 1 + Math.max(
        getHeight(node.left),
        getHeight(node.right)
    )

    const balance = getBalance(node);

    if(balance > threshold){ // left heavy
        if(getBalance(node.left) >= 0){
            node = rotateRight(node)
        }else{
            // if balance of node.left is -ve means right heavy we have to
            // first rotate it left the means it tells about left-right rotation
            node = rotateLeftRight(node);
        }
    }else if(balance < -threshold){ //right heavy, condition where balance comes -ve
        if(getBalance(node.right) <= 0){
            node = rotateLeft(node);
        }else{
            node = rotateRightLeft(node);
        }
    }

    return node;
}

const rotateRight = function(node){
    const leftTemp = node.left;

    node.left = leftTemp.right; // confusing part dry run it or see notes
    leftTemp.right = node;

    // update heights at updated nodes
    node.height = 1 + Math.max(
        getHeight(node.left),
        getHeight(node.right)
    )

    leftTemp.height = 1 + Math.max(
        getHeight(leftTemp.left),
        getHeight(leftTemp.right)
    )

    return leftTemp;
}

const rotateLeft = function(node){
    const rightTemp = node.right;

    node.right = rightTemp.left;
    rightTemp.left = node;

    node.height = 1 + Math.max(
        getHeight(node.left),
        getHeight(node.right)
    )

    rightTemp.height = 1 + Math.max(
        getHeight(rightTemp.left),
        getHeight(rightTemp.right)
    )
    
    return rightTemp;
}

const rotateLeftRight = function(node){
    node.left = rotateLeft(node.left);

    return rotateRight(node);
}
const rotateRightLeft = function(node){
    node.right = rotateRight(node.right);

    return rotateLeft(node);
}

const getBalance = function(node){
    if(!node) return 0;

    return getHeight(node.left) - getHeight(node.right);
}

const getHeight = function(node){
    if(node == null) return -1;

    return node.height;
}

const convertAVLNodes_toTreeNode = function(avlNode){
    if(!avlNode) return null;

    let root = new TreeNode(avlNode.val);

    root.left = convertAVLNodes_toTreeNode(avlNode.left);
    root.right = convertAVLNodes_toTreeNode(avlNode.right);

    return root;
}

class AVLNode{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
        this.height = 0;
    }
}