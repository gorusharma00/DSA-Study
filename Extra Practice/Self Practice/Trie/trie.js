class Node{
    constructor(data){
        this.data = data;
        this.isTerminal = false;
        this.children = {};
    }
}

class Trie{
    constructor(){
        this.root = new Node(null);
    }

    insert(word){
        let curr = this.root;
        for(let i = 0; i < word.length; i++){
            let ch = word[i];
            if(curr.children[ch]){
                curr = curr.children[ch];
            }else{
                let n = new Node(ch);
                curr.children[ch] = n;
                curr = curr.children[ch];
            }
        }
        curr.isTerminal = true; // after insertion we have to also is this last node of that word
    }

    search(word){
        let curr = this.root;
        for(let i = 0; i < word.length; i++){
            let ch = word[i];

            if(curr.children[ch]){
                curr = curr.children[ch];
            }else {
                return false;
            }
        }

        return curr.isTerminal;
    }

}

const trie = new Trie();

trie.insert('bad');
trie.insert('dad');
trie.insert('bobby');

console.log(trie.search('sam'))
console.log(trie.search('samarth'));



