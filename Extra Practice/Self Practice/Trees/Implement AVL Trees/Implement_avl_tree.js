/**
 * @param {Array<number>} items
 * @param {number} threshold
 * @return {TreeNode}
 */
const insertAVL = (items, threshold) => {
    if (!items || items.length === 0) {
      return null;
    }
  
    let root = new AVLNode(items[0]);
  
    for (let idx = 1; idx < items.length; idx++) {
      root = insert(root, items[idx], threshold);
    }
  
    return convertAvlNodesToTreenode(root);
  }
  
  const insert = (node, key, threshold) => {
    if (!node) {
      return new AVLNode(key);
    }
  
    if (key < node.val) {
      node.left = insert(node.left, key, threshold);
    } else {
      node.right = insert(node.right, key, threshold);
    }
  
    node.height = 1 + Math.max(
      getHeight(node.left),
      getHeight(node.right)
    );
    const balance = getBalance(node);
  
    if (balance > threshold) {
      if (getBalance(node.left) >= 0) {
        node = rotateRight(node);
      } else {
        node = rotateLeftRight(node);
      }
    } else if (balance < -threshold) {
      if (getBalance(node.right) <= 0) {
        node = rotateLeft(node);
      } else {
        node = rotateRightLeft(node);
      }
    }
  
    return node;
  }
  
  const rotateRight = (node) => {
    const leftTemp = node.left;
  
    node.left = leftTemp.right;
    leftTemp.right = node;
  
    node.height = 1 + Math.max(
      getHeight(node.left),
      getHeight(node.right)
    );
    leftTemp.height = 1 + Math.max(
      getHeight(leftTemp.left),
      getHeight(leftTemp.right)
    );
  
    return leftTemp;
  }
  
  const rotateLeft = (node) => {
    const rightTemp = node.right;
  
    node.right = rightTemp.left;
    rightTemp.left = node;
  
    node.height = 1 + Math.max(
      getHeight(node.left),
      getHeight(node.right)
    );
    rightTemp.height = 1 + Math.max(
      getHeight(rightTemp.left),
      getHeight(rightTemp.right)
    );
  
    return rightTemp;
  }
  
  const rotateLeftRight = (node) => {
    node.left = rotateLeft(node.left);
  
    return rotateRight(node);
  }
  
  const rotateRightLeft = (node) => {
    node.right = rotateRight(node.right);
  
    return rotateLeft(node);
  }
  
  const getBalance = (node) => {
    if (!node) {
      return 0;
    }
  
    return getHeight(node.left) - getHeight(node.right);
  }
  
  const getHeight = (node) => {
    if (!node) {
      return -1;
    }
  
    return node.height;
  }
  
  const convertAvlNodesToTreenode = (avlNode) => {
    if (!avlNode) {
      return null;
    }
  
    const root = new TreeNode(avlNode.val);
  
    root.left = convertAvlNodesToTreenode(avlNode.left);
    root.right = convertAvlNodesToTreenode(avlNode.right);
  
    return root;
  }
  
  class AVLNode {
    constructor(val) {
      this.val = val;
      this.height = 0;
      this.left = null;
      this.right = null;
    }
  }
  