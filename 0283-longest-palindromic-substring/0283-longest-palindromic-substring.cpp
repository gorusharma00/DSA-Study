class Solution {
public:
    string longestPalindrome(string s) {
        int maxlen = 0; 
        int maxspos = 0; 
        
        for (int i = 0; i < s.size(); i++) {
            int j = 1; 
            while (((i - j) >= 0) && ((i + j) < s.size()) && (s[i - j] == s[i + j])) {
                ++j; 
            }
            if ((2 * j - 1) > maxlen) {
                maxlen = 2 * j - 1; 
                maxspos = i - j + 1; 
            }
            
            int j = 0; 
            while (((i - j) >= 0) && ((i + 1 + j) < s.size()) && (s[i - j] == s[i + 1 + j])) {
                ++j; 
            }
            if ((2 * j) > maxlen) {
                maxlen = 2 * j; 
                maxspos = i - j; 
            }
        }
        
        return s.substr(maxspos, maxlen);
    }
};