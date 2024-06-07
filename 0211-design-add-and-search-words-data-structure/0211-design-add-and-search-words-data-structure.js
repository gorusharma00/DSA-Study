class Node {
    constructor(data) {
        this.data = data;
        this.isTerminal = false; 
        this.children = {}
    }
}

var WordDictionary = function() {
     this.root = new Node(null);
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
     let curr = this.root;
    for(let i = 0; i < word.length; i++) {
        let ch = word[i];
        if(curr.children[ch]) {
            // if the child is present
            curr = curr.children[ch];
        } else {
            let n = new Node(ch);
            curr.children[ch] = n;
             curr = curr.children[ch];
        }
    }
    // when the loop ends curr is at the node of last char
    curr.isTerminal = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
function searchUtil(root, word){
    let curr = root;
    for(let i = 0; i < word.length; i++) {
        let ch = word[i];
        if(ch == "."){
            for(let j = 0; j < 26; j++){
                if(curr.children[String.fromCharCode(97 + j)] != null){ // finds curr.children has a, b, c etc..
                    if(searchUtil(curr.children[String.fromCharCode(97 + j)], word.substring(i+1))){
                        return true;
                    }
                }
            }
            return false;
        }
        else if(curr.children[ch]) {
            curr = curr.children[ch];
        } else {
            return false;
        }
    }

    return curr.isTerminal;
}

WordDictionary.prototype.search = function(word) {
    return searchUtil(this.root, word);
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */