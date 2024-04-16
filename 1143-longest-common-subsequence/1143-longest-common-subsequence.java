class Solution {
    public static int[] prev;
    public static int[] curr ;

    public static int f_bu(String s1, String s2){
        prev = new int[s2.length() + 1];
        curr = new int[s2.length() + 1];
        // changing indexing to 1based for base case
        for(int i = 1; i <= s1.length(); i++){
            for(int j = 1;  j <= s2.length(); j++){
                // if(i == 0 || j == 0) curr[j] = 0;
                
                    if(s1.charAt(i-1) == s2.charAt(j-1)){
                        curr[j] = 1 + prev[j - 1];
                    }else{
                        curr[j] = Math.max(prev[j], curr[j - 1]);
                    }
                
            }
            prev = curr.clone();
        }
        return prev[s2.length()];
    }

    public int longestCommonSubsequence(String text1, String text2) {    
        return f_bu(text1, text2);
    }
}