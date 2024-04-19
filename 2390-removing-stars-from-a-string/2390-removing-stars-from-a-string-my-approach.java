class Solution {
    public String removeStars(String s) {
        Stack<Character> st = new Stack<>();

        for(int i = 0; i< s.length(); i++){
            if(s.charAt(i) == '*'){
                st.pop();
            }else{
                st.push(s.charAt(i));
            }
        }

        String newString = "";

        while(st.empty() == false){
            newString = st.peek() + newString;
            st.pop();
        }

        return newString;
    }
} 

// time complexity => O(n)
// space complexity => O(n) , think about string which doesn't have star then all strings go in stack.
