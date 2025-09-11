import java.util.HashMap;

class trie {

    public class Node{
        Character data;
        boolean isTerminal;
        HashMap<Character, Node> children;
    
        Node(Character data, boolean isTerminal){
            this.data = data;
            this.isTerminal = isTerminal;
            this.children = new HashMap<>();
        }
    }
    
    public Node root;

    trie(){
        this.root = new Node('\0', false);
    }
    
    public void insert(String word){
        Node curr = this.root;
        for(int i = 0; i < word.length(); i++){
            char ch = word.charAt(i);
            if(curr.children.containsKey(ch)){
                curr = curr.children.get(ch);
            }else{
                Node n = new Node(ch, false);
                curr.children.put(ch, n);
                curr = curr.children.get(ch);
            }
        }
        curr.isTerminal = true;
    }
    
    public boolean search(String word){
        Node curr = this.root;
        for(int i = 0; i < word.length(); i++){
            char ch = word.charAt(i);
            if(curr.children.containsKey(ch)){
                curr = curr.children.get(ch);
            }else{
                return false;
            }
        }

        return curr.isTerminal;
    }
}

public class implement_Trie{
    static trie tr = new trie();

    public static void main(String[] args) {
        tr.insert("bad");
        tr.insert("sam");
        tr.insert("samarth");
        System.out.println(tr.search("sameer"));
    }
}





