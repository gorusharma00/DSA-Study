/**
 * @param {number[]} nums
 * @return {number}
 */
class TrieNode{
    constructor(){
        this.left = null;
        this.right = null;
    }
}
class Trie{
    constructor(){
        this.root = new TrieNode();
    }

    insert(num){
        let curr = this.root;

        for(let i = 31; i >= 0; i--){
            let ith_bit = (num >> i) & 1;

            if(ith_bit == 1){
                if(curr.right == null){
                    curr.right = new TrieNode();
                }
                curr = curr.right;
            }else{
                if(curr.left == null){
                    curr.left = new TrieNode();
                }
                curr = curr.left;
            }
        }
    }
}

function findMaxXor(tr, num){
    let curr = tr.root;
    let maxXor = 0;

    for(let i = 31; i >= 0; i--){
        let ith_bit = (num >> i) & 1;

        if(ith_bit == 0){

            if(curr.right != null){
                maxXor += Math.pow(2, i);
                curr = curr.right;
            }else{
                curr = curr.left;
            }

        }else{
            if(curr.left != null){
                maxXor += Math.pow(2, i);
                curr = curr.left;
            }else{
                curr = curr.right;
            }
        }
    }
    return maxXor;
}

var findMaximumXOR = function(nums) {
    let tr = new Trie();
    for(let i = 0; i < nums.length; i++){
        tr.insert(nums[i]);
    }

    let maxResult = 0;
    for(let i = 0; i < nums.length; i++){
        let temp = findMaxXor(tr, nums[i]);

        maxResult = Math.max(maxResult, temp);
    }

    return maxResult;
};