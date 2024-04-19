class Solution {
    public String removeStars(String s) {
        Stack<Character> st = new Stack<>();
            int i = 0;
            while(i < s.length()) {
                if(s.charAt(i) != '*') {
                    st.push(s.charAt(i));
                } else if(s.charAt(i) == '*' && !st.isEmpty()) {
                    st.pop();
                }
                i++;
            }
            StringBuilder result = new StringBuilder("");  // here it string co catenation is not used because it is expensive opeartion in java
            while(!st.isEmpty()) {
                result.append(st.peek());
                st.pop();
            }
            return result.reverse().toString();
    }
}