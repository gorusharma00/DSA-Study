class Node{
    constructor(data){
        this.data = data;
        this.isTerminal = false;
        this.children = {};
    }
}
var Trie = function() {
    this.root = new Node(null);
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let curr = this.root;
    for(let i = 0; i < word.length; i++){
        let ch = word[i];
        if(curr.children[ch]){
             // if the child is present
            curr = curr.children[ch];
        }else{
            let n = new Node(ch);
            curr.children[ch] = n;
            curr = curr.children[ch];
        }
    }
    // when the loop ends curr is at the node of last char
    curr.isTerminal = true; // we return like this think if you have same prefix 
                            // which is equal to given word but word is not present it's just prefix
                            // in that case we have to check
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let curr = this.root;
    for(let i = 0; i < word.length; i++){
        let ch = word[i];
        if(curr.children[ch]){
            curr = curr.children[ch];
        }else{
            return false;
        }
    }

    return curr.isTerminal;  // we get here when all char finds
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let curr = this.root;
    for(let i = 0; i < prefix.length; i++){
        let ch = prefix[i];
        if(curr.children[ch]){
            curr = curr.children[ch];
        }else{
            return false;
        }
    }
    return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */