class Solution {
    public boolean isAnagram(String s, String t) {
        HashMap<Character, Integer> map = new HashMap();
        if(s.length() != t.length()) return false;

        for(int i=0; i<s.length(); i++){
            char c = s.charAt(i);
            if(map.containsKey(c)){
                int count = map.get(c);
                map.put(c, count+1);
            }else{
                map.put(s.charAt(i), 1);
            }
        }

        for(int i=0; i<t.length(); i++){
            char c = t.charAt(i);
            if(map.containsKey(c)){
                int count = map.get(c);
                map.put(c, count-1);
            }else{
                return false;
            }
        }

        for(int value: map.values()){
            if(value!=0){
                return false;
            }
        }

        return true;
    }
}