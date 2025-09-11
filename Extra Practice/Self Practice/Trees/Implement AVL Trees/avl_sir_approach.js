class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
        this.height = 1; // here height is calculating on basis of nodes not on edges
    }
}

class Avl{
    constructor(){
        this.root = null;
    }

    rightRotate(alpha){
        // alpha is the unbalanced node

        let beta = alpha.left;
        let sigma = beta.right;
        beta.right = alpha;
        alpha.left = sigma;

        // update heights of alpha and beta
        // Update height of alpha first, because height of beta depends on it
        alpha.height = Math.max(this.height(alpha.left), this.height(alpha.right)) + 1;
        beta.height = Math.max(this.height(beta.left), this.height(beta.right)) + 1;

         // return the new root beta
        return beta;
    }

    leftRotate(alpha){
        // alpha is the unbalanced node

        let beta = alpha.right;
        let sigma = beta.left;
        beta.left = alpha;
        alpha.right = sigma;

        // update heights of alpha and beta
        // Update height of alpha first, because height of beta depends on it
        alpha.height = Math.max(this.height(alpha.left), this.height(alpha.right)) + 1;
        beta.height = Math.max(this.height(beta.left), this.height(beta.right)) + 1;

         // return the new root beta
        return beta;
    }

    height(node){
        if(node == null) return 0; // suppose node.left or right never exist
        return node.height;
    }

    getBF(node){ // bf => Balance factor
        if(node == null) return 0;
        return this.height(node.left) - this.height(node.right);
    }

    insertinAVL(data){
        this.root = this.insert(this.root, data);
    }

    insert(alpha, data){ // data is element we have to insert, and alpha is the root
        if(alpha == null) return new Node(data);

        // if alpha is not null, you're on an existing node
        // now decide whether this data should be inserted in lst or rst of the current node
        if(alpha.data > data){
            // go lst
            alpha.left = this.insert(alpha.left, data);
        }else if(alpha.data < data){
            // go rst
            alpha.right = this.insert(alpha.right, data);
        }else{
            // duplicates
            return alpha; // as the node is already present
        }

        // update the heiht as new data has been inserted
        alpha.height = Math.max(this.height(alpha.left), this.height(alpha.right)) + 1;

        // this part is executing while coming back in the recursion
        // start balancing

        const bf = this.getBF(alpha);

        // if the bf is greater than 1 or less than -1, we have root unbalanced
        if(bf > 1){
            // tree is left heavy
            // how to decide if we need to do right rotation or left right rotation
            let beta = alpha.left;

            if(data < beta.data){
                // right rotation
                return this.rightRotate(alpha);
            }else{
                // left right roation
                alpha.left = this.leftRotate(alpha.left);
                return this.rightRotate(alpha);
            }

        }else if(bf < -1){
            // tree is right heavy
            // how to deciode if we need to do left roation or right left roation
            let beta = alpha.right;

            if(data > beta.data){
                // left rotate
                return this.leftRotate(alpha);
            }else{
                // right left rotate
                alpha.right = this.rightRotate(alpha.right);
                return this.leftRotate(alpha);
            }
        }
        
        return alpha;  // bf is already 1, -1 or 0
    }

    deleteinAVL(key){
        this.root = this.delete(this.root, key)
    }

    delete(alpha, key){ // aplha => root
        if(alpha == null) return null;

        if(alpha.data < key){
            // go in right
            alpha.right = this.delete(alpha.right, key);
        }else if(alpha.data > key){
            // go in left
            alpha.left = this.delete(alpha.left, key);
        }else{
            // where we find alpha.data == key, that is we have to delete
            if(alpha.left == null && alpha.right == null){
                // case where we find leaf node
                return null;
            }else if(alpha.left == null){
                // case where subtree has only one child either left or right
                return alpha.right
            }else if(alpha.right == null){
                return alpha.left;
            }else{

                // case where subtress has both child
                
                let temp = alpha.right;
                while(temp != null && temp.left != null){
                    temp = temp.left;
                }

                alpha.data = temp.data;
                alpha.right = this.delete(alpha.right, temp.data);
            }
            // update the heiht as data has been deleted
            alpha.height = Math.max(this.height(alpha.left), this.height(alpha.right)) + 1;
    
            
            // start balancing
    
            const bf = this.getBF(alpha);
    
            // if the bf is greater than 1 or less than -1, we have root unbalanced
            if(bf > 1){
                // tree is left heavy
                // how to decide if we need to do right rotation or left right rotation
                let beta = alpha.left;
    
                if(key < beta.data){
                    // right rotation
                    return this.rightRotate(alpha);
                }else{
                    // left right roation
                    alpha.left = this.leftRotate(alpha.left);
                    return this.rightRotate(alpha);
                }
    
            }else if(bf < -1){
                // tree is right heavy
                // how to deciode if we need to do left roation or right left roation
                let beta = alpha.right;
    
                if(key > beta.data){
                    // left rotate
                    return this.leftRotate(alpha);
                }else{
                    // right left rotate
                    alpha.right = this.rightRotate(alpha.right);
                    return this.leftRotate(alpha);
                }
            }
        }


        return alpha;
    }

    preorder(root, result) {
        if(root == null) return null;
        // If th›e root is not null, that means it has some data
        // process the root
        result.push(root.data);
        
        // go to the left sub tree recursively
        this.preorder(root.left, result);
        
        // go to the right sub tree recursively    
        this.preorder(root.right, result);
    }


    preorderTraversal() {
        
        let result = [];
        this.preorder(this.root, result);
        return result;
    }

    inorder(root, result) {
        if(root == null) return null;
        // If the root is not null, that means it has some data
        
        
        // go to the left sub tree recursively
        this.inorder(root.left, result);
        
        // process the root
        result.push(root.data);
        
        // go to the right sub tree recursively    
        this.inorder(root.right, result);
    }


    inorderTraversal() {
        
        let result = [];
        this.inorder(this.root, result);
        return result;
    };
}

let avl = new Avl();
avl.insertinAVL(1);
avl.insertinAVL(2);
avl.insertinAVL(3);
avl.insertinAVL(4);
avl.insertinAVL(5);
avl.insertinAVL(6);
avl.insertinAVL(8);
avl.deleteinAVL(5);
avl.insertinAVL(9);
avl.deleteinAVL(8);

const pre = avl.preorderTraversal();
const inorder = avl.inorderTraversal();

console.log(pre, inorder);